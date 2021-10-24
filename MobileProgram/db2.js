//Juho
import React from 'react';
import * as SQLite from 'expo-sqlite';

const db=SQLite.openDatabase('testi.db');

//method returns a Promise - in the calling side .then(...).then(...)....catch(...) can be used
export const init=()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            //By default, primary key is auto_incremented - we do not add anything to that column
            tx.executeSql('create table if not exists testi4(id integer not null primary key, checkbox text not null, isChecked boolean);',
            //second parameters of execution:empty brackets - this parameter is not needed when creating table            
            [],
            //If the transaction succeeds, this is called
            ()=>{
                resolve();
            },
            //If the transaction fails, this is called
            (_,err)=>{
                reject(err);
            }
            );
        });
        db.transaction((tx)=>{
            //By default, primary key is auto_incremented - we do not add anything to that column
            tx.executeSql('create table if not exists recipeTest8(id integer not null primary key, recipeName text not null, ingredient text not null, instructions text not null, amount text not null, difficulty text not null, cookingTime text not null);',
            //second parameters of execution:empty brackets - this parameter is not needed when creating table            
            [],
            //If the transaction succeeds, this is called
            ()=>{
                resolve();
            },
            //If the transaction fails, this is called
            (_,err)=>{
                reject(err);
            }
            );
        });
       
    });
    return promise;
};

export const addCriteria=(checkbox)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            //Here we use the Prepared statement, just putting placeholders to the values to be inserted
            tx.executeSql('insert into testi4(checkbox, isChecked) values(?,?);',
            //And the values come here
            [checkbox, false],
            //If the transaction succeeds, this is called
            (_, result)=>{
                resolve(result);
            },
            //If the transaction fails, this is called
            (_,err)=>{
                reject(err);
            }
            );
        });
    });
    return promise;
};

export const addRecipe=(recipeName, ingredient, instructions, amount, difficulty, cookingTime)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            //Here we use the Prepared statement, just putting placeholders to the values to be inserted
            tx.executeSql('insert into recipeTest8(recipeName, ingredient, instructions, amount, difficulty, cookingTime) values(?,?,?,?,?,?);',
            //And the values come here
            [recipeName, ingredient, instructions, amount, difficulty, cookingTime],
            //If the transaction succeeds, this is called
            (_, result)=>{
                resolve(result);
            },
            //If the transaction fails, this is called
            (_,err)=>{
                reject(err);
            }
            );
        });
    });
    return promise;
};


export const fetchAllRecipe=()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            //Here we select all from the table fish
            tx.executeSql('select * from recipeTest8;',  
            [],
            (tx, result)=>{
                resolve(result);
            },
            (tx,err)=>{
                reject(err);
            }
            );
        });
    });
    return promise;
};

export const fetchAllCriteria=()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            //Here we select all from the table fish
            tx.executeSql('select * from testi4;',  
            [],
            (tx, result)=>{
                resolve(result);
            },
            (tx,err)=>{
                reject(err);
            }
            );
        });
    });
    return promise;
};

