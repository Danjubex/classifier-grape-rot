"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var go = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var model, training_data, target_data, i, h;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            model = tf.sequential();

            model.add(tf.layers.dense({ units: 10, activation: 'sigmoid', inputShape: [2] }));
            model.add(tf.layers.dense({ units: 1, activation: 'sigmoid', inputShape: [10] }));

            model.compile({ loss: 'meanSquaredError', optimizer: 'rmsprop' });

            training_data = tf.tensor2d([[0, 0], [0, 1], [1, 0], [1, 1]]);
            target_data = tf.tensor2d([[0], [1], [1], [0]]);
            i = 1;

          case 7:
            if (!(i < 100)) {
              _context.next = 15;
              break;
            }

            _context.next = 10;
            return model.fit(training_data, target_data, { epochs: 30 });

          case 10:
            h = _context.sent;

            console.log("Loss after Epoch " + i + " : " + h.history.loss[0]);

          case 12:
            ++i;
            _context.next = 7;
            break;

          case 15:

            model.predict(training_data).print();

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function go() {
    return _ref.apply(this, arguments);
  };
}();

var _tfjs = require("@tensorflow/tfjs");

var tf = _interopRequireWildcard(_tfjs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

go();