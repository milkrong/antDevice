import { ByteStrPipe } from './byte-str.pipe';

describe('ByteStrPipe', () => {
  it('create an instance', () => {
    const pipe = new ByteStrPipe();
    expect(pipe).toBeTruthy();
  });
});
