abstract class AbstractProductA {}
class ProductA1 extends  AbstractProductA {}
class ProductA2 extends  AbstractProductA {}

abstract class AbstractProductB {}
class ProductB1 extends AbstractProductB {}
class ProductB2 extends AbstractProductB {}

abstract class AbstractFactory {

    abstract createProductA(): AbstractProductA

    abstract createProductB(): AbstractProductB
}

class ConcreteFactory1 extends AbstractFactory {

    createProductA(): AbstractProductA {
        return new ProductA1()
    }

    createProductB(): AbstractProductB {
        return new ProductB1()
    }
}

class ConcreteFactory2 extends AbstractFactory {

    createProductA(): AbstractProductA {
        return new ProductA2()
    }

    createProductB(): AbstractProductB {
        return new ProductB2()
    }
}
