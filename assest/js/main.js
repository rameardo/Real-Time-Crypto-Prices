const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=XRP,BTC,BCH,ETC,ETH,LTC,DASH,NEO,EOS,ADA,XLM,TRX,XMR,IOTA,XEM,BNB,XTZ,ZEC&tsyms=USD";
const vm = new Vue({
    el: '#UIBKLIVECRYTOEXCHANGE',   
    data: {
     results: []
        },
     mounted() {
      this.upDate();
      this.timer = setInterval(this.upDate, 0)
      }, 
      methods:{
      upDate: function() {
            axios.get(url).then(response => {
              this.results = response.data
            })
       }, 
      cancelAutoUpdate: function(){
            clearInterval(this.timer)
       },
       beforeDestroy() {
         clearInterval(this.timer)
       }
    }
});
