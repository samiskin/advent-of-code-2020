import * as utils from './utils';

const realInput = `
...#...###......##.#..#.....##.
..#.#.#....#.##.#......#.#....#
......#.....#......#....#...##.
...#.....##.#..#........##.....
...##...##...#...#....###....#.
...##...##.......#....#...#.#..
..............##..#..#........#
#.#....#.........#...##.#.#.#.#
.#..##......#.#......#...#....#
#....#..#.#.....#..#...#...#...
#.#.#.....##.....#.........#...
......###..#....#..#..#.#....#.
##.####...#.............#.##..#
....#....#..#......#.......#...
...#.......#.#..#.........##.#.
......#.#.....###.###..###..#..
##..##.......#.#.....#..#....#.
..##.#..#....#.............##.#
....#.#.#..#..#........##....#.
.....####..#..#.###..#....##..#
#.#.......#...##.##.##..#....#.
.#..#..##...####.#......#..#...
#...##.......#...####......##..
...#.####....#.#...###.#.#...#.
....#...........#.##.##.#......
.....##...#.######.#..#....#..#
.#....#...##....#..######....#.
...#.....#...#####.##...#..#.#.
.....#...##........##.##.##.###
#.#..#....##....#......#....#.#
......##...#.........#....#.#..
###..#..##......##.#####.###.##
#.....#..##.##....#...........#
##..#.#..##..#.#.....#......#..
.#.##.#..#.#....##..#..#....#..
.#......##..##.#...#..#.......#
#....##.##..###..###......##.#.
....###..##.......#.###.#....#.
..##........#........##.....#..
.#..#.....#...####.##...##.....
....#.#.#.....#.##..##.....#..#
..............#.....#...#.....#
.#.....#......###...........#.#
.....#.#......#.##..#..........
.#......###............#.#.##..
.#.#....##.#..###.....#.##..#.#
.......#.#.#..#..#..#...##..#.#
.#.###...##.#.#.####.#.#...#...
...#.#....#......##.##.#.......
#...#.....##....#........##....
.....###...#.##.#......##.#..#.
..#...##.##.###..#..#......####
.#.##.#..#.##..##..........##..
..#.#.#..#.#.....#...###.....#.
..#..#.#....#.##.............##
.......#..###..#.#...#.....##.#
####.#.#......#..#.##.........#
..........#.....#..##......###.
..#..............#...#..##.....
......#.#.#..#.##.....####..##.
.##.#..#.#....#.......#..#.....
..#..#..#.##.#....###.#.#.#.#.#
.....#....#......###..#........
#.#.#..#...###.....#......#.##.
...#.#....#.#......#........#..
..#...###.#...#..#....##...#..#
.###.##..#..#...###.#..#.####..
#....#..##..##..#......#...##..
#.#..#...#..#...###..#.#.##....
##....#....##.####...#.#.###...
##.#...#.......#.##.##....#...#
..#.#..........#..#.#.#....#..#
..#........#...#....#....#....#
..#..#....#.......#........#...
......#....#....##.#....#.#.##.
.##...###.##.##....##.#...###..
.....##..#.#.....###..#.....###
....##.#.##...##..##........#..
#...#..##.#.#....#......#...#..
.###.##.#........#.####....#...
#.##.....#..#...#..##.##..#.#..
.....#.#..#....#..#...##.##.#..
.#......#####...##...#.#.###.#.
#......##....#.....#......##.#.
#.#.##.###.#......#####..#.....
........###.#...#..#.#........#
....#....###..#.##.#...#....#..
..........#..#.#....#...#.#...#
#.##......###.#.#.#....####...#
...#.#....#........##.#.....##.
.....##..#.#.#..###...##...#...
#...#...#....#....##........#..
.....#.........##.#......#..#..
#.....##..#.###.....#....##.##.
...#..#..#.#........##...##.#.#
..#..##.###.....#.#.....###.##.
..###.........#...##.....###...
...###...##.#...##....##.......
.#.#..#...###..#.#....#....#...
##..#.......#....#.#...#..#..#.
..#......#....####..##..#.###.#
..#.......##........#.#.#..#...
.#.......#.##.#.##.#.......#..#
###...#...#...#...#..#...#...##
..#..........#..###........##..
.##..#....##......##........#.#
......#.##......#......##...#.#
.#.#....#.#.#........#......#..
.#.#..#....####..##...##....#..
.#...##..#..#..#####....##.#...
.##.#.#...#...#.#...#.##.#...#.
###.#...##..#.###.#.....#.##.#.
#.....#.###.#.#...#..#....#.#..
..##..#....#......#.........###
.#...#...##......#...#.####....
..#.##...##..............#.#..#
..#......#..##...........#..#.#
..#####...#..#.......##...###..
..##..#....#.#...###.#...#.....
..#....#..#.#.......#..#.#.#...
.##..#.#.....##....#.......#...
...#.#..###...##....#....##..#.
.....##..#...##.####....##...#.
.......#.........#...#.##..####
........###..#..#.##.###..#....
.#.#..#.##.##.........#...#....
.###......#.....#....##....####
.##..##...........#.....#.....#
#.#.#.#.#.#.##..#.#.#..#.##....
.##.##...##..#....##..###..####
#..##.#......#...###.........#.
#..#...#..##..#..##.....##...#.
#...##..#...##.#.###.#...#.....
.###.....#.......#...#.##.###.#
..........#.#......#...###...##
..##....#.#..#....#.###...#..##
#.#..#....##.##..##.........##.
#.....#.##.###.#..#....##...#..
...#........##...#..###..######
#..#.#.#.#...#....#....###.#..#
...##.##.##.....##..#........#.
..#.#....#..#.......#...##.##.#
###.##.......##..#.####...#.#..
....#.#.....##.....#.#.##...#..
.#..##..#.....#.#..#...#..#..#.
.###....##...#......#.....#....
##.##.###......#...#...###.#...
#...#.##...#.#....##.....####..
#.#.#.#...###...##.............
..#....#.....##.#...#......#...
....#...#......#...#..#...#.#..
.###..#.....#..#...#....#...#..
..#...#.#..###.......#..#.#...#
#...###.##.....#....#..#.#..##.
...#.##.#.##......#.#.#.##.....
........####...##...##..#....#.
.#.#....#....#.#...##.###...##.
#.#...###.#.#.#....#....#.#....
.####.#..#.#....#..#.#..#..#...
#####...#...#...#....#.#.#..##.
..###.##.###...#..........#.##.
##.....#...#....###..###.#.#.#.
#..##.#..#..#..#...#.#...###..#
##....#.#...##......#.#...#...#
.##..........#.#....#...#.##..#
....#....####.#.####......#.###
..##.#.....####.#.####.......#.
#.##.##.#.....#.##......##...#.
......###..#.....#.....##......
..#..#....#.#...#.....#......##
##..#..#..###.#.#..#..##.....#.
#....#.#.....#####...#.#.......
.....#..#....#.#.#..#...#...#..
............#.##......##.##.#.#
....#...#.#........###....#....
..#..#...###.#....##..#..###.##
#.##....#...#.....##..#.##.#...
...##..###...#.#.....##.#......
.#..#.##.#####..#.......#..###.
...#.##...###.....####.#.#.....
.#......##.#.#.#.#.##.#.....#..
..#.##.#..##.......#.#.....##..
..................#....#...#...
.##.#..#.#.#..#.......#.#..##.#
....#........#......#..####..#.
#...#...##..##.#..#.......##...
#..#..#..#..#........####..#.#.
..#.#......#..#.##.##.#.#...#.#
...#..#......#.#.###.#.##..##..
..#...##.....#..#...##..#.#....
#.........#....#..#....##.##..#
..#..#.#....#..#...#.##.....#..
...#..#...#.#.....#..##..#.#...
....#........#.#....##..##..#..
#.....#.#..#.......#.##.....#..
.#.###.###...##...##..###...#..
.##.##.......#.#......#.....#.#
...#....##....#..#..........#.#
..#.##.........#.#.....#.....#.
...#.##..##.......##..##...#...
#.##......##.##..#.....##...##.
#.#.#..##...#.#............#.#.
....#.....#......##...#.#.....#
...#.#......#.#...###.......#..
......##..###....#.#...#.#####.
..#..#.#.#...##.#...###..##..#.
##.##.#.#.##.#..#....#...#...#.
#..#....######.##.#...#...#.#..
.#..#.##....#..#.#.......#....#
....#....#......##....##.#.#...
.###......#..#..#.......####..#
.#.#.....#..###...........##...
.##..##.##.....####..#..#..##..
..#..##.#......#...###.##..#.#.
....##..#.....###..#.##....##.#
#..#......#....#.........#.....
.#...#.....#.#..#..##....#.....
.##..#...#..##.#..#...........#
..#..##........##.......#..#...
#.....#....#....#.#.#...##.#...
...#...#.#.#..#.##.#.#...#.....
..#..#.#....#....###....#.#.#..
...###..#...#..#....#.....#....
...#...#.#..#.....#...###......
##......#..........#.#.#..#.#.#
....#.....#.....#..#..#.#.#.#..
...####...#.##...#.#..#....#.#.
#.##........##.............#.##
#.#.#.#.#.....................#
.#.###....#..##.##.##....#.....
#.#...#.####.###...#..#..#.#...
.##...#..###.......##..#.#.....
#.#.#.#...#...#.##.....#.......
.##.#.#.#......####..#.#.......
###..........#......#...##...#.
.........##...#.##...#.#.......
...#.#.....#...#..#...#..##..#.
.#..###...#.#.........###....#.
##..#...#........#.........##..
.....#...#.#...#.#.#...........
..#....##...#.#..#..#.##....##.
.##....#.#.....##.#..#..#...##.
..##......#.#...#.#.......##.#.
##...#..#...##.#........#.##...
#......#.##..#.#..#.###.......#
#.#...#.....#.#......#.#.#.....
#.....#..#.......#....##.#.#..#
###.#....#..##.#.##....#....#..
#.##.##....#.#..#.#...#....#...
####...#####...#.....#....##.#.
....#.#...#.#.##.#.#.##.#.#.###
#.....##.#.....#.#......#.#..#.
.#....##.#..#........#...##.#..
......#...#....##....##....##..
..###.....#....##.#...#..#.....
#....##...##.##..##.#...#...#..
#..#...#...#.#....##..#.#....#.
......................#.....#..
.#..#...#.........#....##...###
.##.#.#...##...#...#...#..#....
.#.###....#.#............##..#.
###..##.#.#.#.#....##...#......
.##................####...##.##
.#.#.........##....#.#.##.##.#.
....#...#...#...##...#.##.#..#.
.#.#........#..##.....#..#....#
##.#..#.#....#.....#...#...#...
.#...##....#.....##....#..#.#.#
####.....#..#....#......###.##.
##..##.#....###.....#...#......
.##.#...#.....#.#..#.#..#.#...#
.....#.#..#..#..###.#...###.#..
.#.#.##.#..#.#..#...#..#.......
..#.....#....#.##.##.##.......#
.#..##....###...#..............
#....#...#.#.......#....##.#...
....#.#..##.#....#..#.#....#.#.
#.........##...#.#.............
#.#.......##.....#...##..##.#.#
.......#....#..##...#..#######.
.#.#...##........#..#.....#.#..
.#.......#..#......#.##.##...##
.........#............#....#..#
.#......#...##...##...#....###.
.........#...#.#.###.......#...
###.#..#.#.#.#......##...#.#...
.#.........##.#....###....#.#..
#.#....#..#.##.#..#....##...#..
###.#...#..#..##........#.###..
.....#....#..#........#..#.##.#
..#.....##......#....#..#.#.#..
.#.........#.....#.....#.......
......#....#.###..#.#....#....#
..#.#..#.#.###.........#..#..#.
..#..#.#.#.........#....##.#.#.
#.......#........##...##....#..
##..#..#...###...#..##..#..#.#.
##..#..#....#.#..##..#..#.#..#.
..##.....##.#..#.#........###..
..#.#..#..##........#...#....##
.##..#....##..#..#..#..#.#....#
#....#.....##........#.....#.##
......#....#.#..#......#.##....
.......#..#..#......##.........
......#...#..##.....#......#..#
#..#..#....##....#........##..#
##....#...#.#.....#####........
...#.#..#.#.##.#.##..##...#....
..#..#..#..#..#....#..#..##...#
.#.....#....##.##....##.....#..
#...#.....#.....#.#...#.#....#.
.###...#..##....#..#...#.###...
....#..##..#.......#.##.##..###
#.......##.....#.......#.#...##
#.....#.#.#....#.#......#.#.#..
..##.....#..###......##........
.....#...#..##....#......#.....
#..#..#....#.#...#..###.......#
.....#.....#....#..#...#.#..##.
#####........#...#..#..##..#.#.
.#..#...#.##....#.#..#......###
#.###.#..#.....##..##....#...#.
.#...#.#####....##..........##.
`.trim().split('\n').map((s) => s.trim().split(''));

const testInput = `
..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#
`.trim().split('\n').map((s) => s.trim().split(''));

const input = realInput;

let count = 0;

const diffs = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2]
]
let results = 1;
for (let d = 0; d < diffs.length; d++) {
  const [dx, dy] = diffs[d];
  for (let i = 0, y = 0; y < input.length; i+= 1, y += dy) {
    const x = (dx * i) % input[0].length;
    // console.log(x, y, input[y][x]);
    if (input[y][x] === '#') {
      count++;
    }
  }
// console.log(count);
results *= count;
count = 0;

}
console.log(results);




