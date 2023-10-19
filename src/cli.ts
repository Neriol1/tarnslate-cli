import { Command } from 'commander'
import { translate } from './main'
const programer = new Command()

programer
  .version('0.0.1')
  .name('fy')
  .usage('<english | zh >')
  .argument('<english | zh >')
  .action((word: string) => {
    translate(word)
  })

programer.parse(process.argv)