# makeid

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web-based tool for generating and comparing various unique identifiers.

## Demo

[**https://code4fukui.github.io/makeid/**](https://code4fukui.github.io/makeid/)

The web interface displays a list of generated IDs from different algorithms. Click the "generate" button to create a new set of IDs.

*Visual Description: The page shows a two-column layout. The left column lists the ID type names (uuid, ulid, cuid, nanoid, tid), and the right column contains input fields with the corresponding generated IDs.*

## Features

- Generates 5 types of unique identifiers: UUID, ULID, CUID, Nanoid, and TID.
- Simple web interface for instant ID generation and comparison.
- Includes a performance benchmark for key generation libraries.

## Usage

1.  Open the [demo page](https://code4fukui.github.io/makeid/).
2.  The page will display a set of freshly generated IDs.
3.  Click the **generate** button to create new IDs.

## Performance

Benchmark results for generating 1,000,000 IDs, as measured by `performance.js`. Note that TID is not included in this benchmark.

| Type   | Time (seconds) | Example ID                               | Length |
|--------|----------------|------------------------------------------|--------|
| uuid   | 0.350          | `a079b64a-c8ac-4651-9c30-07c49ea978f5`   | 36     |
| nanoid | 0.780          | `mKm0GvN-n7jV9f8_4mmI0`                  | 21     |
| ulid   | 3.893          | `01GW9WAE5ZTK05Z8XN0GTESM5C`             | 26     |
| cuid   | 9.204          | `mi0ik4y5l9w7lpe9od943law`               | 24     |

## Dependencies

This tool utilizes the following libraries:

- [UUID](https://github.com/code4fukui/UUID)
- [ulid](https://github.com/code4fukui/ulid)
- [cuid](https://github.com/code4fukui/cuid)
- [nanoid](https://github.com/code4fukui/nanoid)
- [TID](https://github.com/code4fukui/TID)

## License

MIT License