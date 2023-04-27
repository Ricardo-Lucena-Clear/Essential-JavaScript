let dobro = function (a) {
    return 2 * a;
  };
  
  dobro = (a) => {
    return 2 * a;
  };
  
  // retorno implicito usadondo apenas 1 linha parar ser pratico é mais utilizavel(normalmente usado em aplicações especificas)
  dobro = (a) => 2 * a;
  console.log(dobro(Math.PI));
  
  let ola = function () {
    return "Ola";
  };
  
  ola = () => "Ola";
  ola = (_) => "Ola";
  console.log(ola());