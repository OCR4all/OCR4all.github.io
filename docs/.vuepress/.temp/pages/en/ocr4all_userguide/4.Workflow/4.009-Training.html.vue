<template><h3 id="_4-9training" tabindex="-1"><a class="header-anchor" href="#_4-9training" aria-hidden="true">#</a> 4.9	Training</h3>
<p><strong>Input:</strong> text line images with corresponding ground truth (as an option, existing OCR models can be included as well, which are used as so called 'pre-training' and as basis for model training
<strong>Output:</strong> one or more OCR model(s)
The aim of our software is to produce a text containing as few errors as possible. In that case, why is even necessary to use the training module and produce models targeted to your document, instead of simply correcting it manually? In fact, the better a recognition model the shorter the correction time. The idea of a continuous model training is to train increasingly better models through continuous corrections, which in turn will reduce the amount of corrections needed for the next pages, and so on.</p>
<ul>
<li>With this training tool, users will be able to train models tailored to their document, based on the lines of ground truth available for this document. In order to begin training, please proceed to the following adjustments in general settings:
-- Set the 'Number of folds to train' (i.e. the number of models to train) to 5. → Training will occur with a model package containing five individual models.
-- <strong>'Only train a single fold box':</strong> please don't fill out this box!
-- Set the <strong>'Number of models to train in parallel'</strong> at -1. → All training models will be trained simultaneously.
-- If all characters contained in the pretraining model need to be kept in the model you wish to train (i.e. added to its so called whitelist), please check the <strong>'Keep all characters loaded from the last model'</strong> box.
-- In effect, the <strong>'Whitelist characters to keep in the model'</strong> is the exhaustive list of characters used during training and in the subsequently generated model. Any character not contained in the whitelist won't be included in the process.
-- <strong>'Pretraining'</strong>: Either <strong>'Train each model based on different existing models'</strong> (a menu will appear containing five dropdown lists. Inside each of them, enter one of the five models belonging to the model package used as advised earlier. Regardless of the training step (be it the first round or the third), always enter the five models used since the beginning) or <strong>'Train all models based on one existing model'</strong> (click on this setting if you started training using only one model. Simply select that exact training model for each repetition of the training process).
-- <strong>'Data augmentation':</strong> Please don't fill out this box! This function describes the data augmentation per line. Users can enter a number, e.g. 5, in order to increase the amount of training material. This can lead to the generation of better performing models. However, this process is more time-costly than the standard route.
-- <strong>'Skip retraining on real data only'</strong>: Please don't fill out this box!</li>
<li>The advanced settings remain unchanged.</li>
</ul>
<pre>

BILD

</pre>
<p>fig. 40. Settings for the training of document-specific models.</p>
<ul>
<li>Click on 'execute' to start training. You will be able to view the training progress at any time in the console. Training time will vary depending on the total amount of ground truth lines.</li>
<li>In accordance with the aforementioned settings, a model package (containing five individual models and tailored to your document's exact needs) will be generated through training and automatically saved in folder ocr4all/models/document title/0. Going forward, this model package will be labelled '0'. From this point on, while working on this document and striving towards improving recognition, you will be able to select said package under menu item 'recognition' among other models, when working with new pages from the same document. If you wish to generate a second document-specific model package (e.g. to improve the first one's weaknesses), simply repeat the process as described above. This new model will be labelled '1', and so on.</li>
</ul>
</template>
