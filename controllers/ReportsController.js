const { param, validationResult, checkSchema } = require('express-validator');

const Reports = require('../models/Reports')

const ReportsController = {};

ReportsController.validate = method => {
    switch(method) {
        case 'createReports': {
            return checkSchema({
                
            })
        }
    }
}