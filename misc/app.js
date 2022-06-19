const items = ["bananas", "chocolate noddle", "apple", "cheesee"];

// const apple = items[2];
// const cheese = items[3];

const [banana, chocolate, ...rest] = items;
console.log(banana);

const user = {
  name: 'Ed',
  photos: [1,2,3,4,5,6,7],
  age: 25,
  analytics: {
    subscribers: 25000,
    videose: 250
  }
};

const photos = user.photos;

const {age} = user;

// IFFE

function hello(){
  console.log('how are you');
}

hello();

(() => {
  console.log('iffe function');
})();