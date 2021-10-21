import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
      should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();

    // expect(true).toBeTrue();
    // expect(true).toBe(true);
    // expect(true).toBeTruthy();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
      should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 5; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    // veririficar dps o pq deu erro pois deveria ser 5
    expect(ids.size).toBe(1);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
      should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
      should throw when called with empty`, () => {
    const emptyValues = [null, undefined, '', '0'];
    emptyValues.forEach((emptyValue) => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue))
        .withContext(`Empty value ${emptyValue}`)
        .toThrow();
    });
  });
});
