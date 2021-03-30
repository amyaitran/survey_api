const express = require('express')

module.exports = {
    getSurvey: (req, res) => {
        console.log("Receive call for survey")
        const max = 11;
        const min = 0;
        const survey = {
            "createTime": 1617068710,
            "graphs": [
                {
                    'graphId': 1,
                    'title': 'What is your favorite color?',
                    'type': 'bar',
                    'keys': [
                        'red',
                        'white',
                        'blue',
                        'green'
                    ],
                    'values': [
                        Math.floor(Math.random() * (max - min) + min),
                        Math.floor(Math.random() * (max - min) + min),
                        Math.floor(Math.random() * (max - min) + min),
                        Math.floor(Math.random() * (max - min) + min)
                    ]
                }
            ]
        }

        return res.status(200).json({ survey: survey})
    }
}
