class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    // eslint-disable-next-line no-unused-vars
    const _ = this.sqft; // Referencing a property without using it
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
