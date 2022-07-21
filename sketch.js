var column1, column2, column3, column4, column5, column6, column7;
var line1, line2, line3, line4, line5, line6, line7;
var button;
//BLOCO-1
var input1, input2, input3, input4, input5, input6, input7, input8, input9,
  valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9;
//BLOCO-2
var input10, input11, input12, input13, input14, input15, input16, input17, input18,
  valor10, valor11, valor12, valor13, valor14, valor15, valor16, valor17, valor18;
//BLOCO-3
var input19, input20, input21, input22, input23, input24, input25, input26, input27,
  valor19, valor20, valor21, valor22, valor23, valor24, valor25, valor26, valor27;
//BLOCO-4
var input28, input29, input30, input31, input32, input33, input34, input35, input36,
  valor28, valor29, valor30, valor31, valor32, valor33, valor34, valor35, valor36

function setup() {
  createCanvas(600, 700);

  column1 = createSprite(0, 150, 10, 900);
  //adicionar uma cor à coluna1
  column2 = createSprite(96.67, 150, 10, 900);
  column3 = createSprite(203.34, 150, 10, 900);
  column4 = createSprite(300, 150, 10, 900);
  //adicionar uma cor à coluna4
  column5 = createSprite(396.67, 150, 10, 900)
  column6 = createSprite(503.34, 150, 10, 900)
  column7 = createSprite(598, 150, 10, 900)
  //adicionar uma cor à coluna7

  line1 = createSprite(150, 0, 900, 10);
  //adicionar uma cor à linha 1
  line2 = createSprite(150, 96.67, 900, 10);
  line3 = createSprite(150, 203.34, 900, 10);
  line4 = createSprite(150, 300, 900, 10);
  //adicionar uma cor à linha4
  line5 = createSprite(150, 396.67, 900, 10);
  line6 = createSprite(150, 503.34, 900, 10);
  line7 = createSprite(150, 598, 900, 10);
  //adicionar uma cor à linha7

  //BLOCO-1
  input1 = createInput("").attribute("placeholder", "Digite um número");
  input1.position(5, 5)
  input1.class("customInput")

  input2 = createInput("").attribute("placeholder", "Digite um número");
  input2.position(107, 5)
  input2.class("customInput")

  input3 = createInput("").attribute("placeholder", "Digite um número");
  input3.position(208, 5)
  input3.class("customInput")

  input4 = createInput("").attribute("placeholder", "Digite um número");
  input4.position(5, 107)
  input4.class("customInput")

  input5 = createInput("").attribute("placeholder", "Digite um número");
  input5.position(107, 107)
  input5.class("customInput")

  input6 = createInput("").attribute("placeholder", "Digite um número");
  input6.position(208, 107)
  input6.class("customInput")

  input7 = createInput("").attribute("placeholder", "Digite um número");
  input7.position(5, 208)
  input7.class("customInput")

  input8 = createInput("").attribute("placeholder", "Digite um número");
  input8.position(107, 208)
  input8.class("customInput")

  input9 = createInput("").attribute("placeholder", "Digite um número");
  input9.position(208, 208)
  input9.class("customInput")

  //BLOCO-2
  input10 = createInput("").attribute("placeholder", "Digite um número");
  input10.position(305, 5)
  input10.class("customInput")

  input11 = createInput("").attribute("placeholder", "Digite um número");
  input11.position(407, 5)
  input11.class("customInput")

  input12 = createInput("").attribute("placeholder", "Digite um número");
  input12.position(508, 5)
  input12.class("customInput")

  input13 = createInput("").attribute("placeholder", "Digite um número");
  input13.position(305, 107)
  input13.class("customInput")

  input14 = createInput("").attribute("placeholder", "Digite um número");
  input14.position(407, 107)
  input14.class("customInput")

  input15 = createInput("").attribute("placeholder", "Digite um número");
  input15.position(508, 107)
  input15.class("customInput")

  input16 = createInput("").attribute("placeholder", "Digite um número");
  input16.position(305, 208)
  input16.class("customInput")

  input17 = createInput("").attribute("placeholder", "Digite um número");
  input17.position(407, 208)
  input17.class("customInput")

  input18 = createInput("").attribute("placeholder", "Digite um número");
  input18.position(508, 208)
  input18.class("customInput")

  //BLOCO-3
  input19 = createInput("").attribute("placeholder", "Digite um número");
  input19.position(5, 305)
  input19.class("customInput")

  input20 = createInput("").attribute("placeholder", "Digite um número");
  input20.position(107, 305)
  input20.class("customInput")

  input21 = createInput("").attribute("placeholder", "Digite um número");
  input21.position(208, 305)
  input21.class("customInput")

  input22 = createInput("").attribute("placeholder", "Digite um número");
  input22.position(5, 407)
  input22.class("customInput")

  input23 = createInput("").attribute("placeholder", "Digite um número");
  input23.position(107, 407)
  input23.class("customInput")

  input24 = createInput("").attribute("placeholder", "Digite um número");
  input24.position(208, 407)
  input24.class("customInput")

  input25 = createInput("").attribute("placeholder", "Digite um número");
  input25.position(5, 508)
  input25.class("customInput")

  input26 = createInput("").attribute("placeholder", "Digite um número");
  input26.position(107, 508)
  input26.class("customInput")

  input27 = createInput("").attribute("placeholder", "Digite um número");
  input27.position(208, 508)
  input27.class("customInput")

  //BLOCO-4
  input28 = createInput("").attribute("placeholder", "Digite um número");
  input28.position(305, 305)
  input28.class("customInput")

  input29 = createInput("").attribute("placeholder", "Digite um número");
  input29.position(407, 305)
  input29.class("customInput")

  input30 = createInput("").attribute("placeholder", "Digite um número");
  input30.position(508, 305)
  input30.class("customInput")

  input31 = createInput("").attribute("placeholder", "Digite um número");
  input31.position(305, 407)
  input31.class("customInput")

  input32 = createInput("").attribute("placeholder", "Digite um número");
  input32.position(407, 407)
  input32.class("customInput")

  input33 = createInput("").attribute("placeholder", "Digite um número");
  input33.position(508, 407)
  input33.class("customInput")

  input34 = createInput("").attribute("placeholder", "Digite um número");
  input34.position(305, 508)
  input34.class("customInput")

  input35 = createInput("").attribute("placeholder", "Digite um número");
  input35.position(407, 508)
  input35.class("customInput")

  input36 = createInput("").attribute("placeholder", "Digite um número");
  input36.position(508, 508)
  input36.class("customInput")

  //butão para conferir
  button = createImg("button.png");
  button.position(150, 610);
  button.size(300, 85);
  button.mouseClicked(teste);
}

function draw() {
  background(180);


  drawSprites();
}

function errorMesage() {
  console.log("error");
}

function winMesage() {
  console.log("win");
}

function teste() {
  console.log("testando");
  //BLOCO-1
  valor1 = input1.value();
  valor2 = input2.value();
  valor3 = input3.value();
  valor4 = input4.value();
  valor5 = input5.value();
  valor6 = input6.value();
  valor7 = input7.value();
  valor8 = input8.value();
  valor9 = input9.value();
  //BLOCO-2
  valor10 = input10.value();
  valor11 = input11.value();
  valor12 = input12.value();
  valor13 = input13.value();
  valor14 = input14.value();
  valor15 = input15.value();
  valor16 = input16.value();
  valor17 = input17.value();
  valor18 = input18.value();
  //BLOCO-3
  valor19 = input19.value();
  valor20 = input20.value();
  valor21 = input21.value();
  valor22 = input22.value();
  valor23 = input23.value();
  valor24 = input24.value();
  valor25 = input25.value();
  valor26 = input26.value();
  valor27 = input27.value();
  //BLOCO-4
  valor28 = input28.value();
  valor29 = input29.value();
  valor30 = input30.value();
  valor31 = input31.value();
  valor32 = input32.value();
  valor33 = input33.value();
  valor34 = input34.value();
  valor35 = input35.value();
  valor36 = input36.value();

  //LINHAS
  if (valor1 == valor2 == valor3 == valor10 == valor11 == valor12) {
    errorMesage();
  }
  else if (valor4 == valor5 == valor6 == valor13 == valor14 == valor15) {
    errorMesage();
  }
  else if (valor7 == valor8 == valor9 == valor16 == valor17 == valor18) {
    errorMesage();
  }
  else if (valor19 == valor20 == valor21 == valor28 == valor29 == valor30) {
    errorMesage();
  }
  else if (valor22 == valor23 == valor24 == valor31 == valor32 == valor33) {
    errorMesage();
  }
  else if (valor25 == valor26 == valor27 == valor34 == valor35 == valor36) {
    errorMesage();
  }
  //COLUNAS
  if (valor1 == valor4 == valor7 == valor19 == valor22 == valor25) {
    errorMesage();
  }
  else if (valor2 == valor5 == valor8 == valor20 == valor23 == valor26) {
    errorMesage()
  }
  else if (valor3 == valor6 == valor9 == valor21 == valor24 == valor27) {
    errorMesage();
  }
  else if (valor10 == valor13 == valor16 == valor28 == valor31 == valor34) {
    errorMesage();
  }
  else if (valor11 == valor14 == valor17 == valor29 == valor32 == valor35) {
    errorMesage()
  }
  else if (valor12 == valor15 == valor18 == valor30 == valor33 == valor36) {
    errorMesage();
  }
  //BLOCO-1
  if (valor1 == valor2 || valor1 == valor3 || valor1 == valor4 || valor1 == valor5 || valor1 == valor6 || valor1 == valor7 || valor1 == valor8 || valor1 == valor9) {
    errorMesage();
  }
  else if (valor2 == valor1 || valor2 == valor3 || valor2 == valor4 || valor2 == valor5 || valor2 == valor6 || valor2 == valor7 || valor2 == valor8 || valor2 == valor9) {
    errorMesage();
  }
  else if (valor3 == valor1 || valor3 == valor2 || valor3 == valor4 || valor3 == valor5 || valor3 == valor6 || valor3 == valor7 || valor3 == valor8 || valor3 == valor9) {
    errorMesage()
  }
  else if (valor4 == valor1 || valor4 == valor2 || valor4 == valor3 || valor4 == valor5 || valor4 == valor6 || valor4 == valor7 || valor4 == valor8 || valor4 == valor9) {
    errorMesage();
  }
  else if (valor5 == valor1 || valor5 == valor2 || valor5 == valor3 || valor5 == valor4 || valor5 == valor6 || valor5 == valor7 || valor5 == valor8 || valor5 == valor9) {
    errorMesage();
  }
  else if (valor6 == valor1 || valor6 == valor2 || valor6 == valor3 || valor6 == valor4 || valor6 == valor5 || valor6 == valor7 || valor6 == valor8 || valor6 == valor9) {
    errorMesage();
  }
  else if (valor7 == valor1 || valor7 == valor2 || valor7 == valor3 || valor7 == valor4 || valor7 == valor5 || valor7 == valor6 || valor7 == valor8 || valor7 == valor9) {
    errorMesage();
  }
  else if (valor8 == valor1 || valor8 == valor2 || valor8 == valor3 || valor8 == valor4 || valor8 == valor5 || valor8 == valor6 || valor8 == valor7 || valor8 == valor9) {
    errorMesage();
  }
  else if (valor9 == valor1 || valor9 == valor2 || valor9 == valor3 || valor9 == valor4 || valor9 == valor5 || valor9 == valor6 || valor9 == valor7 || valor9 == valor8) {
    errorMesage();
  }//BLOCO-2
  else if (valor10 == valor11 || valor10 == valor12 || valor10 == valor13 || valor10 == valor14 || valor10 == valor15 || valor10 == valor16 || valor10 == valor17 || valor10 == valor18) {
    errorMesage();
  }
  else if (valor11 == valor10 || valor11 == valor12 || valor11 == valor13 || valor11 == valor14 || valor11 == valor15 || valor11 == valor16 || valor11 == valor17 || valor11 == valor18) {
    errorMesage();
  }
  else if (valor12 == valor10 || valor12 == valor11 || valor12 == valor13 || valor12 == valor14 || valor12 == valor15 || valor12 == valor16 || valor12 == valor17 || valor12 == valor18) {
    errorMesage()
  }
  else if (valor13 == valor10 || valor13 == valor11 || valor13 == valor12 || valor13 == valor14 || valor13 == valor15 || valor13 == valor16 || valor13 == valor17 || valor13 == valor18) {
    errorMesage();
  }
  else if (valor14 == valor10 || valor14 == valor11 || valor14 == valor12 || valor14 == valor13 || valor14 == valor15 || valor14 == valor16 || valor14 == valor17 || valor14 == valor18) {
    errorMesage();
  }
  else if (valor15 == valor10 || valor15 == valor11 || valor15 == valor12 || valor15 == valor13 || valor15 == valor14 || valor15 == valor16 || valor15 == valor17 || valor15 == valor18) {
    errorMesage();
  }
  else if (valor16 == valor10 || valor16 == valor11 || valor16 == valor12 || valor16 == valor13 || valor16 == valor14 || valor16 == valor15 || valor16 == valor17 || valor16 == valor18) {
    errorMesage();
  }
  else if (valor17 == valor10 || valor17 == valor11 || valor17 == valor12 || valor17 == valor13 || valor17 == valor14 || valor17 == valor15 || valor17 == valor16 || valor17 == valor18) {
    errorMesage();
  }
  else if (valor18 == valor10 || valor18 == valor11 || valor18 == valor12 || valor18 == valor13 || valor18 == valor14 || valor18 == valor15 || valor18 == valor16 || valor18 == valor17) {
    errorMesage();
  }//BLOCO-3
  else if (valor19 == valor20 || valor19 == valor21 || valor19 == valor22 || valor19 == valor23 || valor19 == valor24 || valor19 == valor25 || valor19 == valor26 || valor19 == valor27) {
    errorMesage();
  }
  else if (valor20 == valor19 || valor20 == valor21 || valor20 == valor22 || valor20 == valor23 || valor20 == valor24 || valor20 == valor25 || valor20 == valor26 || valor20 == valor27) {
    errorMesage();
  }
  else if (valor21 == valor19 || valor21 == valor20 || valor21 == valor22 || valor21 == valor23 || valor21 == valor24 || valor21 == valor25 || valor21 == valor26 || valor21 == valor27) {
    errorMesage()
  }
  else if (valor22 == valor19 || valor22 == valor20 || valor22 == valor21 || valor22 == valor23 || valor22 == valor24 || valor22 == valor25 || valor22 == valor26 || valor22 == valor27) {
    errorMesage();
  }
  else if (valor23 == valor19 || valor23 == valor20 || valor23 == valor21 || valor23 == valor22 || valor23 == valor24 || valor23 == valor25 || valor23 == valor26 || valor23 == valor27) {
    errorMesage();
  }
  else if (valor24 == valor19 || valor24 == valor20 || valor24 == valor21 || valor24 == valor22 || valor24 == valor23 || valor24 == valor25 || valor24 == valor26 || valor24 == valor27) {
    errorMesage();
  }
  else if (valor25 == valor19 || valor25 == valor20 || valor25 == valor21 || valor25 == valor22 || valor25 == valor23 || valor25 == valor24 || valor25 == valor26 || valor25 == valor27) {
    errorMesage();
  }
  else if (valor26 == valor19 || valor26 == valor20 || valor26 == valor21 || valor26 == valor22 || valor26 == valor23 || valor26 == valor24 || valor26 == valor25 || valor26 == valor27) {
    errorMesage();
  }
  else if (valor27 == valor19 || valor27 == valor20 || valor27 == valor21 || valor27 == valor22 || valor27 == valor23 || valor27 == valor24 || valor27 == valor25 || valor27 == valor26) {
    errorMesage();
  }//BLOCO-4
  else if (valor28 == valor29 || valor28 == valor30 || valor28 == valor31 || valor28 == valor32 || valor28 == valor33 || valor28 == valor34 || valor28 == valor35 || valor28 == valor36) {
    errorMesage();
  }
  else if (valor29 == valor28 || valor29 == valor30 || valor29 == valor31 || valor29 == valor32 || valor29 == valor33 || valor29 == valor34 || valor29 == valor35 || valor29 == valor36) {
    errorMesage();
  }
  else if (valor30 == valor28 || valor30 == valor29 || valor30 == valor31 || valor30 == valor32 || valor30 == valor33 || valor30 == valor34 || valor30 == valor35 || valor30 == valor36) {
    errorMesage()
  }
  else if (valor31 == valor28 || valor31 == valor29 || valor31 == valor30 || valor31 == valor32 || valor31 == valor33 || valor31 == valor34 || valor31 == valor35 || valor31 == valor36) {
    errorMesage();
  }
  else if (valor32 == valor28 || valor32 == valor29 || valor32 == valor30 || valor32 == valor31 || valor32 == valor33 || valor32 == valor34 || valor32 == valor35 || valor32 == valor36) {
    errorMesage();
  }
  else if (valor33 == valor28 || valor33 == valor29 || valor33 == valor30 || valor33 == valor31 || valor33 == valor32 || valor33 == valor34 || valor33 == valor35 || valor33 == valor36) {
    errorMesage();
  }
  else if (valor34 == valor28 || valor34 == valor29 || valor34 == valor30 || valor34 == valor31 || valor34 == valor32 || valor34 == valor33 || valor34 == valor35 || valor34 == valor36) {
    errorMesage();
  }
  else if (valor35 == valor28 || valor35 == valor29 || valor35 == valor30 || valor35 == valor31 || valor35 == valor32 || valor35 == valor33 || valor35 == valor34 || valor35 == valor36) {
    errorMesage();
  }
  else if (valor36 == valor28 || valor36 == valor29 || valor36 == valor30 || valor36 == valor31 || valor36 == valor32 || valor36 == valor33 || valor36 == valor34 || valor36 == valor35) {
    errorMesage();
  }
  else { winMesage() }

}


