var newJson = [
                  {"j9": [
                        {"tractors": [{"trac_9": 100}, {"trac_8": 80}, {"trac_6": 50}, {"trac_5": 50}]},
                        {"cambines": [{"comb_9": 100}, {"comb_8": 80}, {"comb_6": 50}]}
                        ]
                  },
                  {"tt": [
                      {"tractors": [{"trac_9": 100}, {"trac_8": 70}, {"trac_6": 60}]},
                      {"cambines": [{"comb_9": 90}, {"comb_8": 100}, {"comb_6": 40}, {"comb_5": 40}]}
                      ]
                  },
                  {"kk": [
                      {"tractors": [{"trac_9": 100}, {"trac_8": 70}, {"trac_6": 60}]},
                      {"cambines": [{"comb_9": 90}, {"comb_8": 100}, {"comb_6": 40}, {"comb_5": 40}, {"comb_4": 70}]},
                      {"sprayers": [{"spra_9": 90}, {"spra_8": 100}, {"spra_6": 40}, {"spra_5": 40}, {"spra_4": 70}]}
                      ]
                  }
              ]

// return all of the info in console
for (let dealers of newJson) {
    for(const [company, portfolio] of Object.entries(dealers)) {
        console.log(`---${company}---`);
            for (let category of portfolio) {
                for (const [machines, priceList] of Object.entries(category)) {
                    console.log(`${machines}:`);
                        for (let item of priceList) {
                            for (const [key, value] of Object.entries(item)) {
                                console.log(`\t${key} - ${value}`);
                            }
                        }
                }
            }
    }
}
