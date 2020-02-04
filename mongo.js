// 1) Знайти всіх дітей в яких сердня оцінка 4.2
// db.students.find({ avgScore: 4.2 }).pretty()

// 2) Знайди всіх дітей з 1 класу
// db.students.find({
//     class: 1
// }).pretty()

// 3) Знайти всіх дітей які вивчають фізику
// db.students.find({
//     lessons: 'physics'
// }).pretty()

// 4) Знайти всіх дітей, батьки яких працюють в науці ( scientist )
// db.students.find({
//     "parents.profession": 'scientist'
// }).pretty()

// 5) Знайти дітей, в яких середня оцінка більша за 4
// db.students.find({
//     avgScore: {
//         $gt: 4
//     }
// }).pretty()

// 6) Знайти найкращого учня
// db.students.find().sort({
//     avgScore: -1
// }).limit(1).pretty()

// 7) Знайти найгіршого учня
// db.students.find().sort({
//     avgScore: 1
// }).limit(1).pretty()

// 8) Знайти топ 3 учнів
// db.students.find().sort({
//     avgScore: -1
// }).limit(3).pretty()

// 9) Знайти середній бал по школі
// db.students.aggregate([
//     {
//         $match: {
//             avgScore: {$exists: true}
//         }
//     },
//     {
//         $group: {
//             "_id": null,
//             "avg": { $avg: "$avgScore" }
//         }
//
//     }
// ]).pretty()

// 10) Знайти середній бал дітей які вивчають математику або фізику
// db.students.aggregate([
//     {
//         $match: {
//             $or: [
//                 {lessons: 'mathematics'},
//                 {lessons: 'physics'}
//             ]
//         }
//     },
//     {
//         $group: {
//             "_id": null,
//             "avg": {$avg: "$avgScore"}
//         }
//     }
// ]).pretty()

// 11) Знайти середній бал по 2 класі
// db.students.aggregate([
//     {
//         $match: {
//             class: 2
//         }
//     },
//     {
//         $group: {
//             "_id": null,
//             "avg": {$avg: "$avgScore"}
//         }
//     }
// ]).pretty()

// 12) Знайти дітей з не повною сімєю
// db.students.find({
//     parents: {$size: 1}
// }).pretty()

// 13) Знайти батьків які не працюють

//???? видає 2 батьків, навіть якщо 1 працює
// db.students.find(
//     {
//         $and: [
//             {
//                 parents: {$exists: true}
//             },
//             {
//                 "parents.profession": null
//             }
//         ]
//     },
//     {
//         "parents.name": true,
//         "parents.profession": true,
//         "gender": true,
//         "_id": false
//     }
// ).pretty()

// 14) Не працюючих батьків влаштувати офіціантами
// ?????????????


// 15) Вигнати дітей, які мають середній бал менше ніж 2.5
// db.students.deleteMany({
//     avgScore: {
//         $lt: 2.5
//     }
// })

// 16) Дітям, батьки яких працюють в освіті ( teacher ) поставити 5
// db.students.update(
//     {"parents.profession": "teacher"},
//     {
//         $set: {
//             avgScore: 5
//         }
//     },
//     {
//         multi: true
//     }
// )

// 17) Знайти дітей які вчаться в початковій школі (до 5 класу) і вивчають фізику ( physics )
// db.students.find({
//     $and: [
//         {class: {
//             $lte: 5
//             }},
//         {
//             lessons: "physics"
//         }
//     ]
// }).pretty()

// 18) Знайти найуспішніший клас
// db.students.aggregate([
//     {
//         $match: {avgScore: {$exists: true}}
//     },
//     {
//         $group: {
//             "_id": "$class",
//             "score": {$avg: "$avgScore"}
//         }
//     },
//     {
//         $sort: {score: -1}
//     },
//     {
//         $limit: 1
//     }
// ])