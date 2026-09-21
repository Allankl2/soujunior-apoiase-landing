*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}              https://test-soujunior.vercel.app/#topo
${BROWSER}          chrome
${BTN_DOAR}         xpath=//a[contains(@href, 'apoia.se')]
${TITULO_PAGINA}    xpath=//h1

*** Keywords ***
Abrir o Navegador na Landing Page
    Open Browser    ${URL}    ${BROWSER}
    Maximize Browser Window

Fechar o Navegador
    Close Browser

Dado que o usuário acessa a página inicial em dispositivo móvel
    Set Window Size    414    896
    Sleep              1s

Então o título principal e o botão de doação devem estar visíveis
    Wait Until Element Is Visible    ${TITULO_PAGINA}    timeout=10s
    Element Should Be Visible        ${TITULO_PAGINA}
    
    Scroll Element Into View         ${BTN_DOAR}
    Wait Until Element Is Visible    ${BTN_DOAR}         timeout=10s
    Element Should Be Visible        ${BTN_DOAR}
    Capture Page Screenshot          evidencia_mobile.png

Dado que o usuário clica no botão "Doar agora"
    Go To                            ${URL}
    Maximize Browser Window
    Wait Until Page Contains Element    ${BTN_DOAR}    timeout=10s
    Scroll Element Into View            ${BTN_DOAR}
    Wait Until Element Is Visible       ${BTN_DOAR}    timeout=10s
    Click Element                       ${BTN_DOAR}

Então a página do Apoia.se deve abrir em uma nova aba
    Switch Window                    NEW
    Location Should Contain          apoia.se
    Capture Page Screenshot          evidencia_apoiase.png