# YouTube-Self-Updating-Title

This code fetches data from Database and updates YouTube video title every 1 minute with the fetched data using YouTube API. 

## Installation

```bash
git clone https://github.com/vd152/YouTube-Self-Updating-Title.git
```
```bash
npm i
```
## Setup
* Create .env as the .env.example file given with your own credentials.
* Get your YouTube API credentials from Google Cloud Console.
* Download and save the json credentials file and replace "json file name containing.." in [index.js](https://github.com/vd152/YouTube-Self-Updating-Title/blob/master/index.js) with the file name.
* The model and DB setup was to complete a particular task, you can modify the code according to your need.

## Run 

```bash
npm start
```

Open [http://localhost:5000/](http://localhost:5000/) in your browser. 

You might have to login and give permissions to access YouTube the first time you run it.

