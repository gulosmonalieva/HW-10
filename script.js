////// № 1

// class Restaurant {
//   served = 0;
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   serve() {
//     return this.served++;
//   }
//   setServed(number) {
//     return (this.served += number);
//   }
//   showTotalServed() {
//     return `Всего обслужено ${this.served}`;
//   }

//   info() {
//     return ` Ресторан  ${this.name}  ${this.type} кухня`;
//   }

//   stat() {
//     let currentHour = new Date().getHours();
//     if (currentHour > 9 && currentHour <= 22) {
//       return `${this.name} открыто`;
//     } else {
//       return `${this.name} закрыто`;
//     }
//   }
// }

// const rest = new Restaurant("Дасмия", "Кыргызcкая");
// console.log(rest.info());
// console.log(rest.stat());

// console.log(rest.serve());
// console.log(rest.showTotalServed());
// console.log(rest.serve());
// console.log(rest.showTotalServed());
// console.log(rest.setServed(15));
// console.log(rest.showTotalServed());
// console.log(rest.serve());
// console.log(rest.showTotalServed());

///// №2

class Cars {
  constructor(model, year, engine, color) {
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.color = color;
  }

  showInfo() {
    return `Марка машины: ${this.model}, Год выпуска: ${this.year}, Mощность двигателя: ${this.engine}, Цвет: ${this.color}  `;
  }
}
class ElectroCars extends Cars {
  constructor(model, year, engine, color, battery) {
    super(model, year, engine, color);
    this.battery = battery;
  }
  showInfo() {
    return `Марка машины: ${this.model}, Год выпуска: ${this.year}, Mощность двигателя: ${this.engine}, Цвет: ${this.color} ,Oбъем аккумулятора ${this.battery} `;
  }
  promote() {
    return `${this.model}-классная машина`;
  }
}

const audi = new Cars("Audi100", 1995, 300, "белый");
console.log(audi.showInfo());

const tesla = new ElectroCars("Tesla", 2005, 500, "красный", 2200);
console.log(tesla.showInfo());
console.log(tesla.promote());
