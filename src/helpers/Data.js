import { v4 as uuid } from "uuid";

export const inputsFormAddClient = [
  { placeholder: 'Nombre-Apellido', type: 'text', id: uuid(), testId:'nameOfClientForm',valueInput:'nameOfClientForm' },
  { placeholder: '# Pedido', type: 'text', id: uuid(), testId:'accountClientForm',valueInput:'accountClientForm' }, 
  { placeholder: 'Dirección', type: 'text', id: uuid(), testId:'addressOfClientForm',valueInput:'addressOfClientForm' },
  { placeholder: 'Barrio', type: 'text', id: uuid(), testId:'neighborhoodOfClientForm',valueInput:'neighborhoodOfClientForm' },
  { placeholder: 'Celular', type: 'number', id: uuid(), testId:'phoneOfClientForm',valueInput:'phoneOfClientForm' },
  { placeholder: 'Referencia', type: 'text', id: uuid(), testId:'nameOfReferenceForm',valueInput:'nameOfReferenceForm' },
  { placeholder: 'Contacto', type: 'text', id: uuid(), testId:'contactOfReferenceForm',valueInput:'contactOfReferenceForm' },
  { placeholder: 'Fecha Cuota', type: 'text', id: uuid(), testId:'dateOfPaymentForm',valueInput:'dateOfPaymentForm' },
  { placeholder: '# Cuotas', type: 'number', id: uuid(), testId:'numberOfPaymentForm',valueInput:'numberOfPaymentForm' },
  { placeholder: 'Valor', type: 'number', id: uuid(), testId:'valeuOfProductForm',valueInput:'valeuOfProductForm' },
];

export const categoriesFormAddClient = [
  {
    label: 'Artículo',
    id: uuid(), 
    testId:'categoriesGalery',
    items: [
      { value:'Cuadro pequeño', id:uuid(), name:'Cuadro pequeño', testId:'small-picture' },
      { value:'Cuadro grande', id:uuid(), name:'Cuadro grande', testId:'cuadroGrande' },
      { value:'Marmolina', id:uuid(), name:'Marmolina', testId:'marmolina' },
      { value:'Cena', id:uuid(), name:'Cena', testId:'cena' }
    ], 
    
  },
];

export const itemsFormAddClient = [
  {
    label: 'Imágen', 
    id: uuid(), 
    testId:'itemsGalery',
    items: [
      { value:'Milagrosa', id:uuid(),  name:'Milagrosa', testId:'milagrosa'},
      { value:'Corazón de Jesús', id:uuid(), name:'Corazón de Jesús', testId:'corazonJesus'},
      { value:'Guadalupe', id:uuid(), name:'Guadalupe', testId:'guadalupe'},
      { value:'Pastor con Ovejas', id:uuid(), name:'Pastor con Ovejas', testId:'pastorOvejas'},
      { value:'Ultima Cena', id:uuid(), name:'Última Cena', testId:'ultimaCena'},
      { value:'Jesús con los niños', id:uuid(), name:'Jesús con los niños', testId:'jesúsNiños'},
      { value:'Misericordioso', id:uuid(),  name:'Misericordioso', testId:'misericordioso'},
      { value:'Corazón de María', id:uuid(), name:'Corazón de María', testId:'corazónMaría'},
      { value:'Miguel Arcángel', id:uuid(), name:'Miguel Arcángel', testId:'miguel'},
      { value:'Sagrada Familia', id:uuid(), name:'Sagrada Familia', testId:'familia'},
      { value:'Rostro Galileo', id:uuid(), name:'Rostro Galileo', testId:'rostro'},
      { value:'San Rafael', id:uuid(), name:'San Rafael', testId:'sanRafael'},
      { value:'San Gabriel', id:uuid(), name:'San Gabriel', testId:'sanGabriel'},
      { value:'San Jose', id:uuid(), name:'San Jose', testId:'sanJose' },
    ],
  }
];
