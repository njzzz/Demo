<template>
  <div class="dashboard">
    <HistogramChart /> 
    <PieChart />
  </div>
</template>
<script>
import PieChart from './components/PieChart';
import HistogramChart from './components/HistogramChart';
export default {
  components:{
    HistogramChart,
    PieChart
  }
}
</script>