import ClassRoom from './0-classroom.js';

describe('ClassRoom', () => {
  test('should have a maxStudentsSize of 10', () => {
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
  });
});
