Feature: IT-nonstop.net
  As a participant of community
  I want to be sure that the website is working fine

  Scenario: Get title of website
    Given I go on the website "http://it-nonstop.net/"
    Then should the title of the page be "IT NonStop 2016"

  Scenario: Speakers
    Given I go on the website "http://it-nonstop.net/city/voronezh#shedule"
    Then I should see speakers
    """
    Alexander Belotserkovskiy
    Alexander Kasheverov
    Alexey Rybakov
    Konstantin Mars
    Stanislav Mekhonoshin
    Vecheslav Mikhailov
    Vitaliy Bolshakov
    """

