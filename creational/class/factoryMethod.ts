class Product {}
class ConcreteProduct1 {} // It should be hidden form client! 
class ConcreteProduct2 {} // It should be hidden form client!

abstract class Creator {

    abstract factoryMethod(): Product

    anOperation() {
        const product = this.factoryMethod()
    }
}

class ConcreteCreator1 extends Creator {

    factoryMethod(): Product {
        return new ConcreteProduct1()
    }
}

class ConcreteCreator2 extends Creator {

    factoryMethod(): Product {
        return new ConcreteProduct2()
    }
}

// Client usage
function main() {

}