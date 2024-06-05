import { useEffect, useState } from "react";
import {
  AnnotationContext,
  AppLayout,
  Hotspot,
  Icon,
  SideNavigation,
  SpaceBetween,
} from "@cloudscape-design/components";
import { Outlet } from "react-router-dom";
import {
  Density,
  Mode,
  applyDensity,
  applyMode,
} from "@cloudscape-design/global-styles";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import { blanco, negro, nombreApp } from "../env";
import logo from "/public/logoOscuro.png";
import logo2 from "/public/logoClaro.png";

function App() {
  applyDensity(Density.Comfortable);
  const [open, setOpen] = useState(true);
  const [mode, setMode] = useState(Mode.Dark);
  const [favicon] = useState(document.createElement("link"));
  favicon.rel = "icon";

  useEffect(() => {
    applyMode(mode);
    if (mode == Mode.Dark) {
      favicon.href = logo;
    } else {
      favicon.href = logo2;
    }
  }, [mode]);

  useEffect(() => {
    document.head.appendChild(favicon);
  }, []);

  return (
    <>
      <AnnotationContext
        onStartTutorial={() => {}}
        onExitTutorial={() => {}}
        currentTutorial={{
          title: "1",
          description: "2",
          completedScreenDescription: "",
          completed: false,
          tasks: [
            {
              title: "Inicio de la página",
              steps: [
                {
                  title: "Buscar aparcamiento",
                  content: (
                    <>
                      En esta pestaña, encontrarás un formulario para reservar
                      plazas de aparcamiento.
                    </>
                  ),
                  hotspotId: "1",
                },
                {
                  title: "Mis vehiculos",
                  content: (
                    <>
                      Aquí encontrarás todos tus vehiculos y podras añadir mas.
                    </>
                  ),
                  hotspotId: "2",
                },
                {
                  title: "Mis reservas",
                  content: (
                    <>
                      En este apartado, encontrarás las reservas activas y
                      antiguas.
                    </>
                  ),
                  hotspotId: "3",
                },
                {
                  title: "Contactanos",
                  content: (
                    <>
                      Por ultimo, en este apartado, encontraras el formulario de
                      contacto.

                      <p>Para continuar, seleccione alguna de las pestañas.</p>
                    </>
                  ),
                  hotspotId: "4",
                },
              ],
            },
            {
              title: "Buscar",
              steps: [
                {
                  hotspotId: '5',
                  title: 'Vehiculo',
                  content: <>Seleccione uno de los vehiculos.</>
                },{
                  hotspotId: '6',
                  title: 'fecha',
                  content: <>Seleccione fecha, hora y tiempo para la reserva.</>
                },{
                  hotspotId: '7',
                  title: 'repetición',
                  content: <>Seleccione si solo quiere realizar una reserva o quiere que se realicen reservas automaticas diarias por cierto tiempo.</>
                },{
                  hotspotId: '8',
                  title: 'boton',
                  content: <>Boton para realizar la reserva.</>
                }
              ],
            },
            {
              title: "Mis vehiculos",
              steps: [
                {
                  hotspotId: '9',
                  title: 'Ver mis vehiculos',
                  content: <>Lista de todos los vehiculos registrados.</>
                },
                {
                  hotspotId: '10',
                  title: 'Form vehiculos marca',
                  content: <>Introduzca la marca del vehiculo.</>
                },
                {
                  hotspotId: '11',
                  title: 'Form vehiculos modelo',
                  content: <>Introduzca el modelo del vehiculo.</>
                },
                {
                  hotspotId: '12',
                  title: 'Form vehiculos boton',
                  content: <>Cuando los datos estén correctos, pulse este botón enviar para guardar el vehiculo.</>
                }
              ],
            },
            {
              title: "Mis reservas",
              steps: [
                {
                  hotspotId: '13',
                  title: 'Reservas lista',
                  content: <>Lista de todas las reservas realizadas.</>
                },
                {
                  hotspotId: '14',
                  title: 'Reservas boton',
                  content: <>Este botón, te redirecciona a la pestaña de Buscar Aparcamineto.</>
                }
              ],
            },
            {
              title: "Contactanos",
              steps: [
                {
                  hotspotId: '15',
                  title: 'Contacto Nombre',
                  content: <>Introduce el nombre por el que te gustaría que te respondieran.</>
                },
                {
                  hotspotId: '16',
                  title: 'Conctacto Correo',
                  content: <>Introduzca el correo electronico al que te gustaría que te contestasemos.</>
                },
                {
                  hotspotId: '17',
                  title: 'Contacto Asunto',
                  content: <>Descripción corta del motivo de contacto</>
                },
                {
                  hotspotId: '18',
                  title: 'Contacto Mensaje',
                  content: <>Escriba una descripción más detallada del mensaje</>
                }
              ],
            },
          ],
        }}
        i18nStrings={{
          labelDismissAnnotation: "",
          stepCounterText: (stepIndex, totalStepCount) =>
            "Paso " + (stepIndex + 1) + "/" + totalStepCount,
          taskTitle: (taskIndex, taskTitle) =>
            "Parte " + (taskIndex + 1) + ": " + taskTitle,
          labelHotspot: (openState, stepIndex, totalStepCount) =>
            openState
              ? "close annotation for step " +
                (stepIndex + 1) +
                " of " +
                totalStepCount
              : "open annotation for step " +
                (stepIndex + 1) +
                " of " +
                totalStepCount,
          nextButtonText: "Siguiente",
          previousButtonText: "Anterior",
          finishButtonText: "Finalizar",
        }}
      >
        <SpaceBetween direction="vertical" size="xxs">
          <TopNavigation
            identity={{
              href: "/#",
              title: nombreApp,
              logo: {
                src: logo,
                alt: nombreApp,
              },
            }}
            utilities={[
              {
                type: "button",
                iconName: "notification",
                title: "Notifications",
                ariaLabel: "Notifications (unread)",
                badge: true,
                disableUtilityCollapse: false,
              },
              {
                type: "button",
                iconSvg:
                  mode == Mode.Dark ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <g fill={blanco}>
                        <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
                      </g>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <g fill={blanco}>
                        <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
                      </g>
                    </svg>
                  ),
                ariaLabel: "Settings",
                title: "Settings",
                onClick: () =>
                  setMode(mode == Mode.Dark ? Mode.Light : Mode.Dark),
              },
              {
                type: "button",
                iconName: "user-profile",
              },
            ]}
          />

          <AppLayout
            maxContentWidth={Number.MAX_VALUE}
            toolsHide={true}
            navigationOpen={open}
            onNavigationChange={() => setOpen(!open)}
            navigation={
              <SideNavigation
                header={{
                  href: "/#",
                  text: nombreApp,
                }}
                items={[
                  {
                    type: "link",
                    text: `Buscar aparcamiento`,
                    href: `#/buscar`,
                    info: (
                      <>
                        <Icon name="search" />{" "}
                        <Hotspot side="right" hotspotId="1" />
                      </>
                    ),
                  },
                  {
                    type: "link",
                    text: `Mis vehiculos`,
                    href: `#/vehiculos`,
                    info: (
                      <>
                        <Icon
                          svg={
                            <svg
                              version="1.0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1280.000000 806.000000"
                            >
                              <g
                                transform="translate(0.000000,806.000000) scale(0.100000,-0.100000)"
                                fill={mode == Mode.Dark ? blanco : negro}
                              >
                                <path
                                  d="M6736 8049 c-1092 -74 -2057 -470 -2916 -1198 -188 -159 -476 -443
-656 -646 -119 -133 -241 -282 -414 -503 -296 -377 -501 -556 -734 -641 -47
-16 -187 -53 -313 -81 -340 -75 -481 -121 -698 -224 -229 -110 -368 -208 -517
-364 -245 -258 -394 -613 -452 -1082 -37 -298 -47 -701 -20 -878 61 -413 316
-750 723 -954 l95 -48 181 0 c100 0 184 2 187 5 3 3 2 26 -3 50 -22 118 -30
309 -20 448 25 314 83 530 216 802 115 237 242 411 431 595 330 320 725 516
1184 587 158 24 473 24 625 0 650 -106 1178 -456 1521 -1010 240 -386 352
-889 299 -1332 -8 -66 -15 -126 -15 -132 0 -10 257 -13 1250 -13 688 0 1250 1
1250 3 0 1 -7 52 -15 112 -17 128 -19 351 -5 480 65 580 362 1110 823 1467
644 498 1517 587 2252 229 655 -319 1099 -938 1191 -1661 13 -107 15 -174 10
-325 -4 -104 -9 -208 -13 -230 l-6 -40 54 46 c30 25 88 85 130 132 326 367
480 883 429 1432 -29 304 -122 576 -277 809 -74 111 -222 271 -308 332 -53 37
-55 41 -51 77 16 141 -54 476 -180 861 -75 230 -102 295 -198 481 -208 406
-517 826 -979 1333 -181 199 -320 298 -635 456 -711 356 -1636 569 -2722 626
-221 11 -528 11 -704 -1z m169 -832 c205 -58 380 -204 470 -391 67 -141 68
-150 72 -586 5 -424 -7 -720 -32 -840 -31 -150 -103 -259 -195 -299 l-49 -21
-1563 2 -1563 3 -57 23 c-62 25 -150 98 -174 144 -29 56 -36 130 -19 210 30
143 125 307 309 532 602 735 1130 1102 1737 1207 196 33 265 37 644 35 303 -2
370 -5 420 -19z m2100 -101 c179 -44 442 -134 543 -185 179 -90 400 -262 543
-422 316 -355 548 -820 550 -1104 1 -97 -12 -149 -50 -202 -39 -53 -80 -82
-153 -104 -57 -18 -110 -19 -986 -19 -911 0 -926 0 -968 20 -51 25 -88 77
-117 162 -21 62 -21 79 -25 757 -3 738 2 888 38 983 28 75 81 124 147 134 26
4 57 11 68 15 11 5 76 7 145 5 98 -4 155 -12 265 -40z"
                                />
                                <path
                                  d="M3148 3579 c-704 -68 -1305 -547 -1528 -1217 -64 -193 -81 -291 -87
-512 -9 -326 39 -556 172 -836 226 -471 668 -831 1176 -958 917 -230 1850 283
2144 1179 98 296 116 613 54 919 -180 893 -1021 1513 -1931 1425z m402 -969
c41 -12 113 -41 160 -65 168 -88 288 -211 370 -380 59 -123 80 -200 87 -330
23 -423 -282 -803 -704 -876 -38 -7 -117 -10 -187 -7 -105 4 -135 10 -223 40
-223 76 -383 215 -488 423 -65 130 -87 222 -88 375 -2 220 60 387 207 564 109
129 312 244 488 276 89 15 292 5 378 -20z"
                                />
                                <path
                                  d="M9880 3580 c-948 -99 -1656 -911 -1617 -1855 42 -994 874 -1763 1862
-1722 383 16 740 147 1040 381 108 86 275 261 357 376 375 530 432 1228 148
1815 -254 525 -756 898 -1330 990 -120 19 -349 26 -460 15z m316 -951 c276
-48 513 -230 629 -483 59 -127 78 -228 72 -386 -3 -102 -10 -152 -27 -205 -53
-166 -156 -319 -282 -420 -78 -62 -221 -135 -313 -161 -90 -25 -293 -30 -388
-10 -332 68 -595 333 -662 665 -23 110 -16 295 14 395 92 308 341 539 651 601
81 16 227 18 306 4z"
                                />
                              </g>
                            </svg>
                          }
                        />
                        <Hotspot side="right" hotspotId="2" />
                      </>
                    ),
                  },
                  {
                    type: "link",
                    text: `Mis reservas`,
                    href: `#/reservas`,
                    info: (
                      <>
                        <Icon name="view-horizontal" />
                        <Hotspot side="right" hotspotId="3" />
                      </>
                    ),
                  },
                  // {
                  //   type: "link",
                  //   text: `Aparcamientos`,
                  //   href: `#/aparcamientos`,
                  //   info: (
                  //     <Icon
                  //       svg={
                  //         <svg
                  //           xmlns="http://www.w3.org/2000/svg"
                  //           viewBox="0 0 619.756 619.756"
                  //         >
                  //           <g fill={mode == Mode.Dark ? blanco : negro}>
                  //             <path
                  //               d="M476.517,92.151c-6.827,0-11.396,0.659-13.786,1.318v43.561c2.825,0.645,6.334,0.886,11.15,0.886
                  //    c17.71,0,28.67-8.983,28.67-24.077C502.551,100.248,493.127,92.151,476.517,92.151L476.517,92.151z"
                  //             />
                  //             <path
                  //               d="M522.026,147.966c-11.378,10.714-28.234,15.54-47.937,15.54c-4.38,0-8.306-0.204-11.339-0.63v52.738
                  //    h-33.07V70.042c10.277-1.745,24.727-3.048,45.073-3.048c20.573,0,35.25,3.944,45.11,11.818c9.425,7.433,15.758,19.697,15.758,34.15
                  //    C535.602,127.392,530.767,139.651,522.026,147.966L522.026,147.966z M589.284,7.035H369.419c-16.839,0-30.473,12.88-30.473,28.775
                  //    v207.587c0,15.895,13.634,28.78,30.473,28.78h219.864c16.801,0,30.473-12.885,30.473-28.78V35.81
                  //    C619.756,19.915,606.084,7.035,589.284,7.035L589.284,7.035z"
                  //             />
                  //             <path
                  //               d="M451.373,462.58c-28.007,0-50.723-22.721-50.723-50.729c0-28.016,22.716-50.723,50.723-50.723
                  //    c28.008,0,50.705,22.707,50.705,50.723C502.078,439.859,479.38,462.58,451.373,462.58L451.373,462.58z M110.407,462.58
                  //    c-28.012,0-50.729-22.721-50.729-50.729c0-28.016,22.707-50.723,50.729-50.723c28.017,0,50.714,22.707,50.714,50.723
                  //    C161.121,439.859,138.414,462.58,110.407,462.58L110.407,462.58z M530.9,301.667H58.745l97.972-169.236
                  //    c0,0,3.541-6.954,20.066-6.954H278.15c0,0,24.044,1.631,23.162-15.037c-0.891-8.846-5.755-14.904-16.231-14.904
                  //    c-10.334,0-134.858,0-134.858,0s-6.352,0.294-13.292,12.254c-6.196,10.619-92.814,160.685-112.137,194.328
                  //    C10.775,304.63,0,318.35,0,335.017v153.598c0,18.602,13.146,33.354,29.368,33.354h29.358v73.629
                  //    c0,9.159,5.912,16.535,13.292,16.535h47.357c7.225,0,13.273-7.376,13.273-16.535v-73.629h295.686v74.236
                  //    c0,9.14,5.896,16.516,13.141,16.516h46.76c7.225,0,13.141-7.376,13.141-16.516v-74.236h29.506
                  //    c16.231,0,29.372-14.753,29.372-33.354V335.017C560.272,316.567,547.131,301.667,530.9,301.667L530.9,301.667z"
                  //             />
                  //           </g>
                  //         </svg>
                  //       }
                  //     />
                  //   ),
                  // },
                  {
                    type: "link",
                    text: `Contactanos`,
                    href: `#/contacto`,
                    info: (
                      <>
                        <Icon name="call" />
                        <Hotspot side="right" hotspotId="4" />
                      </>
                    ),
                  },
                ]}
              />
            }
            content={<Outlet />}
          />
        </SpaceBetween>
      </AnnotationContext>
    </>
  );
}

export default App;
