class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire -- DONE
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;

  }

  // Returns the total number of vampires created by that vampire -- DONE
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is -- DONE
  get numberOfVampiresFromOriginal() {
    let numberOfVamps = 0;
    let currentVamp = this;

    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      numberOfVamps++;
    }

    return numberOfVamps;

  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire) -- DONE
  isMoreSeniorThan(vampire) {

    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    } else {
      return false
    }

  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  // vampireWithName(name) {

  vampireWithName(name) {

  if (name === '') {
    return null;
  }

  if (this.name === name) {
    return this;
  }
    
  for (const offspring of this.offspring) {
    const vampNamed = offspring.vampireWithName(name);
    if (vampNamed) {
      return vampNamed;
    }
  };

  return null;

};

  // Returns the total number of vampires that exist
  get totalDescendents() {

    let vampires = 0;

    for (const offspring of this.offspring) {
      vampires++;
      const vampireCount = offspring.totalDescendents;
      vampires = vampires + vampireCount;
    }

    return vampires;
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

    let vampires = [];

    if (this.yearConverted > 1980) {
      vampires.push(this);
    }

    for (const offspring of this.offspring) {
      const millenialOffspring = offspring.allMillennialVampires;
      vampires = vampires.concat(millenialOffspring);
    }

    return vampires;
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  };
};

module.exports = Vampire;

