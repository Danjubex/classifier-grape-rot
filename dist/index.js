'use strict';

var _tfjs = require('@tensorflow/tfjs');

var tf = _interopRequireWildcard(_tfjs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//
// // Define a model for linear regression.
// const model = tf.sequential();
// model.add(tf.layers.dense({units: 1, inputShape: [1]}));
//
// // Prepare the model for training: Specify the loss and the optimizer.
// model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
//
// // Train the model using the data.
//
//
//
// console.log("concluído");
//
//
// // Define input, which has a size of 5 (not including batch dimension).
// const input = tf.input({shape: [1]});
//
// // First dense layer uses relu activation.
// const denseLayer1 = tf.layers.dense({units: , activation: 'relu'});
// // Second dense layer uses softmax activation.
// const denseLayer2 = tf.layers.dense({units: 4, activation: 'softmax'});
//
//
// // Obtain the output symbolic tensor by applying the layers on the input.
// const output = denseLayer2.apply(denseLayer1.apply(input));
//
// // Create the model based on the inputs.
// const model = tf.model({inputs: input, outputs: output});
//
// // The model can be used for training, evaluation and prediction.
// // For example, the following line runs prediction with the model on
// // some fake data.
//
// // Generate some synthetic data for training.
// const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
// const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
//
//
// model.fit(xs, ys, {epochs: 10}).then(() => {
//   // Use the model to do inference on a data point the model hasn't seen before:
//   // console.log("model",model);
//   model.predict(tf.ones([2, 5])).print();
//
// });


var model1 = tf.sequential();
model1.add(tf.layers.dense({ inputShape: [4], units: 3, activation: 'relu' }));
model1.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
model1.summary();
model1.predict(tf.zeros([1, 4])).print();

var model = tf.sequential();
// model.add(tf.layers.dense({units: 1, inputShape: [1]}));

model.add(tf.layers.dense({ units: 12, inputShape: [1], activation: 'sigmoid' }));

model.add(tf.layers.dense({ units: 6, activation: 'sigmoid' }));
model.add(tf.layers.dense({ units: 12, activation: 'sigmoid' }));
// model.summary();
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

model.compile({
  loss: 'meanSquaredError',
  optimizer: 'sgd'
});
//
// const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
// const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

var xs = tf.tensor2d([0, 0.1, 0.2, 0.3, 0.4, 0.5], [6, 1]);
// const ys = tf.tensor2d([2, 5, 8, 11, 14, 17], [6, 1]);
var ys = tf.tensor2d([0, 0.026744186, 0.069767442, 0.129069767, 0.204651163, 0.296511628], [6, 1]);

model.fit(xs, ys, { epochs: 10000 }).then(function () {
  model.predict(tf.tensor2d([0.9], [1, 1])).print();
});

// Train a simple model:
// const model = tf.sequential();
// model.add(tf.layers.dense({units: 100, activation: 'relu', inputShape: [10]}));
// model.add(tf.layers.dense({units: 1, activation: 'linear'}));
// model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
//
// const xs = tf.randomNormal([100, 10]);
// const ys = tf.randomNormal([100, 1]);
//
// model.fit(xs, ys, {
//   epochs: 100,
//   callbacks: {
//     onEpochEnd: async (epoch, log) => {
//       console.log(`Epoch ${epoch}: loss = ${log.loss}`);
//     }
//   }
// });