
import * as tf from '@tensorflow/tfjs';
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


require("babel-core/register");
require("babel-polyfill");

async function go() {

const model = tf.sequential();
model.add(tf.layers.dense({units: 10, activation: 'sigmoid',inputShape: [2]}));
model.add(tf.layers.dense({units: 1, activation: 'sigmoid',inputShape: [10]}));

model.compile({loss: 'meanSquaredError', optimizer: 'rmsprop'});

const training_data = tf.tensor2d( [[0,0],[0,1],[1,0],[1,1]] );
const target_data = tf.tensor2d([    [0],  [1],  [1],  [0]]  );

for (let i = 1; i < 100 ; ++i) {
 var h = await model.fit(training_data, target_data, {epochs: 30});
   console.log("Loss after Epoch " + i + " : " + h.history.loss[0]);
}

 model.predict(training_data).print();

}

go();
