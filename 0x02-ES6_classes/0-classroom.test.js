import ClassRoom from './0-classroom';

describe('classroom', () => {
  it('should have a maxStudentsSize of 10', () => {
    expect.assertions(1);
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
  });
});
