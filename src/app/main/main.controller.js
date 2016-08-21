'use strict';

angular.module('app')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
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
            'contributors': 'Anne'
          },
          {'name': 'Beta Project',
            'year': 2001,
            'contributors': 'Hane'
          },
          {'name': 'Gamma Project',
            'year': 2009,
            'contributors': 'Mary'
          },
        {'name': 'Delta Project',
          'year': 2020,
          'contributors': 'Anne-Mary'
        }]
      },

      {
        'title': 'Client 2',
        'url': 'https://client2.com/',
        'logo': 'client2.jpeg',
        'name': 'Many One',
        'age': '25',
        'size_company': '52',
        'projects':
          [{'name': 'Miwka',
            'year': 2016,
            'contributors': 'Lily'
          },
          {'name': 'Niuka',
            'year': 2020,
            'contributors': 'Nomer'
          }]
      },

      {
        'title': 'Client 3',
        'url': 'https://client3.com/',
        'logo': 'client3.jpeg',
        'name': 'Frank White',
        'age': '19',
        'size_company': '100',
        'projects':
          [{'name': 'Nyus',
            'year': 2005,
            'contributors': 'Culita'
          },
          {'name': 'Moker',
            'year': 2009,
            'contributors': 'Gabriela'
          },
          {'name': 'Wolf',
            'year': 2014,
            'contributors': 'Elena'
          }]
      },

  ]});
