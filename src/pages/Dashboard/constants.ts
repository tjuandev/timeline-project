import type { TimelineItem } from './types'

export const COLUMNS_AND_ITEM_DATE_FORMAT = 'EEE dd'

// REVIEW -> Remember to remove this comment when improving this mock data
// This guy can be moved to mock.ts
/* eslint-disable sonarjs/no-duplicate-string */
export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 1,
    name: 'First item',
    start: '2021-01-01',
    end: '2021-01-05',
    color: 'red'
  },
  {
    id: 2,
    name: 'Second item',
    start: '2021-01-02',
    end: '2021-01-08',
    color: 'yellow'
  },
  {
    id: 3,
    name: 'Another item',
    start: '2021-01-06',
    end: '2021-01-13',
    color: 'green'
  },
  {
    id: 4,
    name: 'Another item',
    start: '2021-01-14',
    end: '2021-01-14',
    color: 'blue'
  },
  {
    id: 5,
    name: 'Third item',
    start: '2021-02-01',
    end: '2021-02-15',
    color: 'purple'
  },
  {
    id: 6,
    name: 'Fourth item with a super long name',
    start: '2021-01-12',
    end: '2021-02-16',
    color: 'lightBlue'
  },
  {
    id: 7,
    name: 'Fifth item with a super long name',
    start: '2021-02-01',
    end: '2021-02-02',
    color: 'gray'
  },
  {
    id: 8,
    name: 'First item',
    start: '2021-01-03',
    end: '2021-01-05',
    color: 'purple'
  },
  {
    id: 9,
    name: 'Second item',
    start: '2021-01-04',
    end: '2021-01-08',
    color: 'yellow'
  },
  {
    id: 10,
    name: 'Another item',
    start: '2021-01-06',
    end: '2021-01-13',
    color: 'green'
  },
  {
    id: 11,
    name: 'Another item',
    start: '2021-01-09',
    end: '2021-01-09',
    color: 'blue'
  },
  {
    id: 12,
    name: 'Third item',
    start: '2021-02-01',
    end: '2021-02-15',
    color: 'lightBlue'
  },
  {
    id: 13,
    name: 'Fourth item with a super long name',
    start: '2021-01-12',
    end: '2021-02-16',
    color: 'gray'
  },
  {
    id: 14,
    name: 'Fifth item with a super long name',
    start: '2021-02-01',
    end: '2021-02-02',
    color: 'purple'
  }
]
