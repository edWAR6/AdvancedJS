var types = ['Restaurant', 'Bar', 'Hotel'];

function Bussiness(name, address, phone, contactName, businessName){
  this.name = name;
  this.address = address;
  this.contact = {
    phone,
    contactName,
    [createIndex()]: businessName,
    toString(){
      console.log(`Phone: ${phone}, Name: ${contactName}`);
    }
  };

  function createIndex(){
    return types[1];
  }
}

let bussiness = Bussiness('Zona clásica', 'El Guarco', '22334455', 'Ivan', 'Bar Zona Clásica');

console.log('Business ', bussiness);
