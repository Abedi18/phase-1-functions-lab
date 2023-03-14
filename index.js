// Calculates the distance in blocks from pickup location to taxi company's HQ
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  
  // Calculates the distance in feet from pickup location to taxi company's HQ
  function distanceFromHqInFeet(pickupLocation) {
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264; // 1 block = 264 feet
    return distanceInBlocks * feetPerBlock;
  }
  
  // Calculates the distance in feet between two locations
  function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(destination - start);
    const feetPerBlock = 264; // 1 block = 264 feet
    const distanceInFeet = distanceInBlocks * feetPerBlock;
  
    return distanceInFeet;
  }
  
  // Calculates the fare price for a taxi ride based on distance travelled
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const pricePerFoot = 0.02;
      const distanceAfterFirst400Feet = distanceInFeet - 400;
      const farePrice = distanceAfterFirst400Feet * pricePerFoot;
      return farePrice;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }

  
  
  