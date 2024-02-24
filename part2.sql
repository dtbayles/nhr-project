-- Write the following queries in SQL:
-- Get all employees from France (FR)
    SELECT * from employees
    WHERE country = 'FR';

-- Change the employee with a dog named ‘Ellie’ to be from Brazil (BR)
    UPDATE employees
    SET country = 'BR'
    WHERE additional_options ->> 'dog_name' = 'Ellie';

-- Bonus: Get all employees who like baseball.
    SELECT * from employees
    WHERE 'baseball' = ANY(liked_sports);

    const employees = await prisClient.employee.findMany({
        where: {
          liked_sports: {
            has: "baseball",
          },
        },
      });

-- 2nd Bonus: Change every employee who doesn’t like baseball to liking baseball.
    UPDATE employees
    SET liked_sports = array_append(liked_sports, 'baseball')
    WHERE NOT 'baseball' = ANY(liked_sports);

    const employees = await prisClient.employee.updateMany({
        where: {
          NOT: {
            liked_sports: {
              has: "baseball",
            },
          },
        },
        data: {
          liked_sports: {
            push: "baseball",
          },
        },
      });

-- 3rd Bonus: Give Spencer a pet fox named Alfie.
    UPDATE employees
    SET additional_options = additional_options || '{"fox_name": "Alfie"}'::jsonb
    WHERE name = 'Spencer Fielder';

    -- Fetch the current employees additional_options
      const employee = await prisClient.employee.findUnique({
        where: {
          name: "Spencer Fielder",
          id: 4,
        },
        select: {
          additional_options: true,
        },
      });

    -- Check if employee exists and has additional_options
      if (employee && employee.additional_options) {
        -- Merge new data with existing additional_options
        const updatedOptions = {
          ...employee.additional_options,
          fox_name: "Alfie",
        };

        -- Update the employee's additional_options with the merged object
        const updatedEmployee = await prisClient.employee.update({
          where: {
              name: "Spencer Fielder",
              id: 4,
          },
          data: {
            additional_options: updatedOptions,
          },
        });
      }

-- 4th Bonus: Write the non-bonus queries in the PrismaClient syntax assuming the client is called prisClient