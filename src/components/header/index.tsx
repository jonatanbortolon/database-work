
export function Header() {
  return (
    <header id="site-header" className="has-navigation-dropdown">
      <div className="header-wrapper secondary">
        <div className="portal-name">
          <a href="/#" className="portal-logo">
            <span className="sr-only">Portal Gov.br</span>
          </a>
        </div>
        <div className="site-header-links">
          <div className="links-rapidos">
            <a className="toggle-links-rapidos" href="/#" title="Acesso rápido">
              <span className="fas fa-ellipsis-v"></span>
              <span className="sr-only">Acesso rápido</span>
            </a>
            <ul>
              <li className="titulo">Acesso rápido</li>
              <li>
                <a href="/#">Órgãos do Governo</a>
              </li>
              <li>
                <a href="/#">Acesso à Informação</a>
              </li>
              <li>
                <a href="/#">Legislação</a>
              </li>
              <li>
                <a href="/#">Acessibilidade</a>
              </li>
            </ul>
          </div>
          <ul className="header-icons">
            <li>
              <a href="/#" className="link-contraste">
                <span className="fas fa-adjust" aria-hidden="true"></span>
                <span className="sr-only">
                  Mudar para o modo de alto contraste
                </span>
              </a>
            </li>
          </ul>
          <a href="/#" className="link-acesso">
            <span className="fas fa-user"></span>
            Entrar
          </a>
        </div>
      </div>
      <div className="main">
        <div className="header-wrapper">
          <div className="site-name-wrapper">
            <a className="ico-navegacao toggle-main-navigation" href="/#">
              <span className="sr-only">Abrir menu principal de navegação</span>
              <span className="fa fa-bars" aria-hidden="true"></span>
              <span className="fa fa-times" aria-hidden="true"></span>
            </a>
            <div className="site-name">
              <a href="/#" title="O portal do Brasil">
                Governo do Brasil
              </a>
            </div>
          </div>
          <div id="portal-searchbox">
            <form
              id="nolivesearchGadget_form"
              action="https://www.gov.br/pt-br/@@search">
              <div className="LSBox">
                <input
                  name="SearchableText"
                  type="text"
                  size={18}
                  title="O que você procura?"
                  placeholder="O que você procura?"
                  className="searchField"
                  id="nolivesearchGadget"
                />
                <input className="searchButton" type="submit" value="Buscar" />
              </div>
            </form>
            <button type="button" className="close" aria-label="Fechar busca">
              <span className="fas fa-times"></span>
            </button>
          </div>
        </div>
      </div>
      <nav
        className="navigation-wrapper navigation-dropdown"
        aria-label="Menu Principal">
        <div className="navigation-content">
          <div id="main-navigation" className="navigation-cell">
            <ul className="list-navigation">
              <li className="plain dropdown-submenu">
                <a href="/#" className="plain">
                  Serviços
                </a>
                <ul className="submenu">
                  <li className="dropdown-submenu">
                    <a href="/#" className="state-protected hasDropDown">
                      Buscar serviços por
                    </a>
                    <ul className="submenu navTree navTreeLevel1">
                      <li>
                        <a href="/#" className="state-published">
                          Categorias
                        </a>
                      </li>
                      <li>
                        <a href="/#" className="state-published">
                          Órgãos
                        </a>
                      </li>
                      <li>
                        <a href="/#" className="state-published">
                          Estados
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="/#" className="state-protected hasDropDown">
                      Serviços por público alvo
                    </a>
                    <ul className="submenu navTree navTreeLevel1">
                      <li>
                        <a href="/#" className="state-published">
                          Cidadãos
                        </a>
                      </li>
                      <li>
                        <a href="/#" className="state-published">
                          Empresas
                        </a>
                      </li>
                      <li>
                        <a href="/#" className="state-published">
                          Órgãos e Entidades Públicas
                        </a>
                      </li>
                      <li>
                        <a href="/#" className="state-published">
                          Demais segmentos (ONGs, organizações sociais, etc)
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="plain">
                <a href="/#" className="plain">
                  Galeria de Aplicativos
                </a>
              </li>
              <li className="plain dropdown-submenu">
                <a href="/#" className="plain">
                  Notícias
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/#" className="state-published">
                      Últimas notícias
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="state-published">
                      Coronavirus
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="state-published">
                      Ações 2019
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="state-published">
                      Saúde
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="state-published">
                      Agricultura e Pecuária
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="/#" className="state-published hasDropDown">
                      Cidadania e Assistência Social
                    </a>
                    <ul className="submenu navTree navTreeLevel1">
                      <li>
                        <a href="/#" className="state-published">
                          Pátria Voluntária
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/#" className="state-published">
                      Cultura e Esporte
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="/#" className="state-published hasDropDown">
                      Economia e Gestão Pública
                    </a>
                    <ul className="submenu navTree navTreeLevel1">
                      <li>
                        <a href="/#" className="state-published">
                          400 dias
                        </a>
                      </li>
                      <li>
                        <a href="/#" className="state-published">
                          500 dias
                        </a>
                      </li>
                      <li>
                        <a href="/#" className="state-published">
                          600 dias
                        </a>
                      </li>
                      <li>
                        <a href="/#" className="state-published">
                          700 Dias
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/#" className="state-published">
                      Educação e Pesquisa
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="state-published">
                      Energia
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="state-published">
                      Infraestrutura
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="state-published">
                      Justiça e Segurança
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="/#" className="state-published hasDropDown">
                      Meio Ambiente
                    </a>
                    <ul className="submenu navTree navTreeLevel1">
                      <li>
                        <a href="/#" className="state-published">
                          Operação Verde Brasil
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/#" className="state-published">
                      Trabalho e Previdência
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="state-published">
                      Turismo
                    </a>
                  </li>
                </ul>
              </li>
              <li className="plain">
                <a href="/#" className="plain">
                  Acompanhe o Planalto
                </a>
              </li>
              <li className="plain">
                <a href="/#" className="plain">
                  Canais do Poder Executivo Federal
                </a>
              </li>
              <li className="plain dropdown-submenu">
                <a href="/#" className="plain">
                  Navegação
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/#" className="state-published">
                      Acessibilidade
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="state-published">
                      Mapa do Site
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="state-published">
                      Termos de Uso
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="state-published">
                      Sobre o gov.br
                    </a>
                  </li>
                </ul>
              </li>
              <li className="plain">
                <a href="/#" className="plain">
                  Acesse sua conta gov.br
                </a>
              </li>
              <li className="plain">
                <a href="/#" className="plain">
                  Guia de Edição de Serviços do Gov.br
                </a>
              </li>
              <li className="plain">
                <a href="/#" className="plain">
                  Órgãos do Governo
                </a>
              </li>
              <li className="plain">
                <a href="/#" className="plain">
                  Todos por todos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navigation-content-extra">
          <div className="links-redes-wrap">
            <div className="links-uteis links-uteis-mobile">
              <ul>
                <li>
                  <a href="/#">Acessibilidade</a>
                </li>
                <li>
                  <a href="/#" className="link-contraste">
                    <span className="fas fa-adjust" aria-hidden="true"></span>
                    <span className="sr-only">
                      Mudar para o modo de alto contraste
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="links-uteis">
              <div className="titulo">Links Úteis</div>
              <ul>
                <li>
                  <a href="/#">Galeria de Aplicativos</a>
                </li>
                <li>
                  <a href="/#">Participe</a>
                </li>
              </ul>
            </div>
            <div className="header-accessibility">
              <ul>
                <li>
                  <a href="/#" className="orgaos-de-governo">
                    Órgãos do Governo
                  </a>
                </li>
                <li>
                  <a href="/#">Galeria de Aplicativos</a>
                </li>
                <li>
                  <a href="/#">Legislação</a>
                </li>
                <li>
                  <a href="/#">Acesso à Informação</a>
                </li>
                <li>
                  <a href="/#">Participe</a>
                </li>
              </ul>
            </div>
            <div className="redes-sociais">
              <div className="titulo"></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
