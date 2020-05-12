import { FieldErrorsPipe, UI_VALIDATION_MESSAGE_KEYS } from './field-errors.pipe';

describe('FieldErrorsPipe', () => {
  let pipe: FieldErrorsPipe;

  beforeEach(() => {
    pipe = new FieldErrorsPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should resolve message', () => {
    expect(pipe.transform({required: true})[0]).toBe(UI_VALIDATION_MESSAGE_KEYS.required);
  });

  it('should resolve message with object param', () => {
    expect(pipe.transform({max: 2})[0]).toBe(UI_VALIDATION_MESSAGE_KEYS.max.replace('${min}', '2'));
  });

  it('should resolve message with array param', () => {
    expect(pipe.transform({max: 2})[0]).toBe(UI_VALIDATION_MESSAGE_KEYS.max.replace('${min}', '2'));
  });

});
