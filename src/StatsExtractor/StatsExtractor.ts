import { Run } from './Run';

class StatsExtractor {
  runList: Run[];
  constructor(runList: Run[]) {
    this.runList = runList;
  }

  extract() {
    const totalRuns = this.runList.length;
    console.log('Total Runs:', totalRuns);
    console.log('Total wins:', this.runList.filter((run) => run.victory).length);
    console.log(
      'Max HP ever gotten:',
      Math.max(...this.runList.map((run) => Math.max(...run.max_hp_per_floor)))
    );
  }
}

export default StatsExtractor;
