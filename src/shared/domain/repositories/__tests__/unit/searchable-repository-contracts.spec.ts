import { SearchParams } from '../../searchable-repository-contracts';

describe('SearchableRepository unit tests', () => {
  describe('SearchParams tests', () => {
    const sut = new SearchParams();
    expect(sut.page).toEqual(1);
    it('page prop', () => {
      const params = [
        { page: null as any, expected: 1 },
        { page: undefined as any, expected: 1 },
        { page: '' as any, expected: 1 },
        { page: 'test' as any, expected: 1 },
        { page: 0, expected: 1 },
        { page: -1, expected: 1 },
        { page: 10.5, expected: 1 },
        { page: true, expected: 1 },
        { page: false, expected: 1 },
        { page: {}, expected: 1 },
        { page: 1, expected: 1 },
        { page: 2, expected: 2 },
      ];
      params.forEach(i => {
        expect(new SearchParams({ page: i.page }).page).toBe(i.expected);
      });
    });

    it('perPage prop', () => {
      const sut = new SearchParams();
      expect(sut.perPage).toEqual(15);
      const params = [
        { perPage: null as any, expected: 15 },
        { perPage: undefined as any, expected: 15 },
        { perPage: '' as any, expected: 15 },
        { perPage: 'test' as any, expected: 15 },
        { perPage: 0, expected: 15 },
        { perPage: -1, expected: 15 },
        { perPage: 10.5, expected: 15 },
        { perPage: true, expected: 15 },
        { perPage: false, expected: 15 },
        { perPage: {}, expected: 15 },
        { perPage: 1, expected: 1 },
        { perPage: 2, expected: 2 },
        { perPage: 25, expected: 25 },
      ];
      params.forEach(i => {
        expect(new SearchParams({ perPage: i.perPage }).perPage).toBe(
          i.expected,
        );
      });
    });

    it('sort prop', () => {
      const sut = new SearchParams();
      expect(sut.sort).toBe(null);
      const params = [
        { sort: null as any, expected: null },
        { sort: undefined as any, expected: null },
        { sort: '' as any, expected: null },
        { sort: 'test', expected: 'test' },
        { sort: 0, expected: '0' },
        { sort: -1, expected: '-1' },
        { sort: 10.5, expected: '10.5' },
        { sort: true, expected: 'true' },
        { sort: false, expected: 'false' },
        { sort: {}, expected: '[object Object]' },
        { sort: 1, expected: '1' },
        { sort: 2, expected: '2' },
        { sort: 25, expected: '25' },
      ];
      params.forEach(i => {
        expect(new SearchParams({ sort: i.sort }).sort).toBe(i.expected);
      });
    });

    it('sortDirection prop', () => {
      let sut = new SearchParams();
      expect(sut.sortDirection).toBe(null);

      sut = new SearchParams({ sort: null });
      expect(sut.sortDirection).toBe(null);

      sut = new SearchParams({ sort: undefined });
      expect(sut.sortDirection).toBe(null);

      sut = new SearchParams({ sort: '' });
      expect(sut.sortDirection).toBe(null);

      const params = [
        { sortDirection: null as any, expected: 'desc' },
        { sortDirection: undefined as any, expected: 'desc' },
        { sortDirection: '' as any, expected: 'desc' },
        { sortDirection: 'test', expected: 'desc' },
        { sortDirection: 0, expected: 'desc' },
        { sortDirection: 'asc', expected: 'asc' },
        { sortDirection: 'desc', expected: 'desc' },
        { sortDirection: 'ASC', expected: 'asc' },
        { sortDirection: 'DESC', expected: 'desc' },
      ];
      params.forEach(i => {
        expect(
          new SearchParams({ sort: 'field', sortDirection: i.sortDirection })
            .sortDirection,
        ).toBe(i.expected);
      });
    });

    it('filter prop', () => {
      const sut = new SearchParams();
      expect(sut.filter).toBe(null);
      const params = [
        { filter: null as any, expected: null },
        { filter: undefined as any, expected: null },
        { filter: '' as any, expected: null },
        { filter: 'test', expected: 'test' },
        { filter: 0, expected: '0' },
        { filter: -1, expected: '-1' },
        { filter: 10.5, expected: '10.5' },
        { filter: true, expected: 'true' },
        { filter: false, expected: 'false' },
        { filter: {}, expected: '[object Object]' },
        { filter: 1, expected: '1' },
        { filter: 2, expected: '2' },
        { filter: 25, expected: '25' },
      ];
      params.forEach(i => {
        expect(new SearchParams({ filter: i.filter }).filter).toBe(i.expected);
      });
    });
  });
});
