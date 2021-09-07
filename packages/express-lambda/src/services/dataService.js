'use strict';

class DataService {
  constructor(params) {
    this.DataModel = params.DataModel;
  }

  getData({ key, data }) {
    console.log('key, data', key, data);
    return this.DataModel.get({ key, data });
    // return new Promise((resolve, reject) => {
    //   this.DataModel.query('key')
    //     .eq(key)
    //     .exec((error, results) => {
    //       if (error) reject(error);
    //       resolve(results);
    //     });
    // });
  }

  async create({ key, data }) {
    const createdData = await this.DataModel.create({ key, data });
    console.log('createdData', createdData);
    return createdData;
  }
}

module.exports = DataService;
