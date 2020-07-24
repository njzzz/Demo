<template>
  <div class="dashboard">
    <HistogramChart /> 
    <PieChart />
    <RingChart /> 
    <LineChart /> 
  </div>
</template>
<script>
import PieChart from './components/PieChart';
import HistogramChart from './components/HistogramChart';
import RingChart from './components/RingChart';
import LineChart from './components/LineChart';
export default {
  components:{
    HistogramChart,
    PieChart,
    RingChart,
    LineChart
  }
}
</script>