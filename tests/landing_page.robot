*** Settings ***
Documentation    Testes Automatizados de Regressão — Landing Page SouJunior
Resource         ../resources/keywords.resource
Test Setup       Abrir o Navegador na Landing Page
Test Teardown    Fechar o Navegador

*** Test Cases ***
TC-01 - Exibição Above the Fold no Mobile
    [Documentation]    Valida se os elementos principais estão visíveis sem rolagem no celular
    [Tags]            mobile    ux
    Dado que o usuário acessa a página inicial em dispositivo móvel
    Então o título principal e o botão de doação devem estar visíveis

TC-04 - Redirecionamento para o Apoia.se
    [Documentation]    Valida se o botão de doação redireciona para o Apoia.se em nova aba
    [Tags]            funcional    cta
    Dado que o usuário clica no botão "Doar agora"
    Então a página do Apoia.se deve abrir em uma nova aba