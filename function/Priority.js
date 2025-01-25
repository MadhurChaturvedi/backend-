const Count = async (req, res, next) => {
    try {
      let sum = 0;
  
      if (req && req.body && Array.isArray(req.body.numbers)) {
        // Assuming req.body.numbers is an array of numbers
        sum = req.body.numbers.reduce((acc, num) => acc + num, 0);
      } else {
        // If req.body.numbers is not provided or not an array, throw an error
        throw new Error('Invalid input: req.body.numbers must be an array of numbers.');
      }
  
      // You can now use the 'sum' variable as needed, for example:
      res.json({ sum });
    } catch (err) {
      // Pass any errors to the next middleware
      next(err);
    }
  };
  

  export {Count}