import React from 'react';
import { VictoryChart, VictoryLine, VictoryTooltip, VictoryBar, VictoryVoronoiContainer } from 'victory';



const LineChart = () => {
  return (
    <div className='col-span-1 md:col-span-2 lg:h-[70vh] h-[50vh] bg-white border p-4 rounded-lg'>
    <VictoryChart domainPadding={{ y: 10 }}
      containerComponent={
        <VictoryVoronoiContainer
          labels={({ datum }) => `${(datum.x)} ${(datum.y)}`}
        />
      }
    >
      <VictoryLine
        data = {[{x: 1, y: 1}, {x: 2, y:2}]}
      />
    </VictoryChart>
    </div>
  )
}

export default LineChart
