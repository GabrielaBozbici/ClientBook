'use strict'

angular.module('app')
  .controller('addClientController', function ($scope, $rootScope) {
    $scope.date = new Date();
    $rootScope.pageTitle = "Add Client";


    $scope.clients = [
      {
        'title': 'Client 1',
        'url': 'https://client1.com/',
        'logo': 'client1.jpeg',
        'name': 'John Snow',
        'age': '21',
        'size_company': '32',
        'projects':
          [{'name': 'Alfa Project',
            'year': 2000,
            'contributors':
            [{'contr_name': 'Iubi',
              'contr_age': 23
            }]

          },
          {'name': 'Beta Project',
            'year': 2001,
            'contributors':
            [{'contr_name': 'Maria',
              'contr_age': 20
            },
            {'contr_name': 'Domn',
              'contr_age': 25
            },
            {'contr_name': 'Sheilla',
              'contr_age': 25
            }]
          },
          {'name': 'Gamma Project',
            'year': 2009,
            'contributors':
                [{'contr_name': 'Mary',
                  'contr_age': 18
                },
                {'contr_name': 'Anne',
                  'contr_age': 35
                }]
          },
          {'name': 'Delta Project',
            'year': 2020,
            'contributors':
              [{'contr_name': 'Iubi',
                'contr_age': 25
              }]
          }]
      },

      // {
      //   'title': 'Client 2',
      //   'url': 'https://client2.com/',
      //   'logo': 'client2.jpeg',
      //   'name': 'Many One',
      //   'age': '25',
      //   'size_company': '52',
      //   'projects':
      //     [{'name': 'Miwka',
      //       'year': 2016,
      //       'contributors': 'Lily'
      //     },
      //     {'name': 'Niuka',
      //       'year': 2020,
      //       'contributors': 'Nomer'
      //     }]
      // },

      // {
      //   'title': 'Client 3',
      //   'url': 'https://client3.com/',
      //   'logo': 'client3.jpeg',
      //   'name': 'Frank White',
      //   'age': '19',
      //   'size_company': '100',
      //   'projects':
      //     [{'name': 'Nyus',
      //       'year': 2005,
      //       'contributors': 'Culita'
      //     },
      //     {'name': 'Moker',
      //       'year': 2009,
      //       'contributors': 'Gabriela'
      //     },
      //     {'name': 'Wolf',
      //       'year': 2014,
      //       'contributors': 'Elena'
      //     }]
      // },

    ];

    var i;
    var j;
    var k;
    var contributors_young = [];
    console.log(contributors_young);
    // for (i = 0; i < $scope.clients.length; i ++)
      for (j = 0 ; j < $scope.clients[0].projects.length; j++) {

        // console.log("porjects number: ", $scope.clients[0].projects.length);
        // console.log("projects:" ,$scope.clients[0].projects[j]);

        for (k = 0; k < $scope.clients[0].projects[j].contributors.length; k++){

          console.log("numarul de contributori:", $scope.clients[0].projects[j].contributors.length);
          console.log("varsta: ", $scope.clients[0].projects[j].contributors[k].contr_age);

          if($scope.clients[0].projects[j].contributors[k].contr_age === 25){

            contributors_young.push($scope.clients[0].projects[j]);
            console.log("proeictu cu cont 25 ani: ", $scope.clients[0].projects[j].name);
          }

          $scope.clients[0].projects[j].contributors[k].isValid = "true";


          };
        };
        console.log("noul array " , contributors_young);


    //
    // is_valid= true pt fiecrae contributor
    // console.log($scope.clients[0].projects.length);
    // var i;
    // var j;
    // var k;
    // for (i = 0; i < $scope.clients.length; i ++){
    //
    //     for (j = 0 ; j < $scope.clients[i].projects.length; j++) {
    //
    //       for (k = 0; k < $scope.clients[i].projects[j].contributors.length; k++){
    //         console.log($scope.clients[i].projects[j].contributors[k]);
    //         $scope.clients[i].projects[j].contributors[k].isValid = "true";
    //       };
    //     };
    // };
console.log($scope.clients);

    // console.log($scope.clients[0].title);
    // $scope.clients[0].title = "Gabriela";
    // console.log($scope.clients[0].title);


  });
