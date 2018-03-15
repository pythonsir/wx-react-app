const initstate = {
    visitData: [],
    visitData2: [],
    salesData: [],
    searchData: [],
    offlineData: [],
    offlineChartData: [],
    salesTypeData: [],
    salesTypeDataOnline: [],
    salesTypeDataOffline: [],
    radarData: [],
    loading: false,
  }


function chart(state = initstate,{type,payload}){

    switch(type){
       case 'save':
            return {
                ...state,
                ...payload,
            }
       case 'clear':
            return {
                visitData: [],
                visitData2: [],
                salesData: [],
                searchData: [],
                offlineData: [],
                offlineChartData: [],
                salesTypeData: [],
                salesTypeDataOnline: [],
                salesTypeDataOffline: [],
                radarData: [],
            }

        default:
            return state
    }



}

export default chart;