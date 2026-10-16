import type { RouteStat } from "../lib/types";
import type {
  RouteCategoryCard,
  RouteDetailData,
  RouteFaq,
  SupportFeature,
} from "./types";

// Source GPX files behind ROUTE_170_PATH/ROUTE_70_PATH above — served
// from public/gpx/ so the "Download GPX" button (course-overview.tsx)
// can link straight to them.
export const GPX_DOWNLOADS: { href: string; filename: string }[] = [
  { href: "/gpx/eko170-2027-gran-fondo.gpx", filename: "EKO170-2027-Gran-Fondo.gpx" },
  { href: "/gpx/eko170-2027-medio-fondo.gpx", filename: "EKO170-2027-Medio-Fondo.gpx" },
];

// Fallback waypoints for Option A, the route the rider vote did NOT pick
// (2026-10-12) — a visual approximation traced from the rider-supplied
// route-map screenshot (eko170.png) against known Lagos geography, not
// survey-grade GPS. Kept only as vote-history data on `ROUTE_VOTE_OPTIONS`
// (home/route-vote/constants.ts) — no "confirmed route" rendering uses
// this anymore; those all use the real GPX-derived `ROUTE_170_PATH` and
// `ROUTE_70_PATH` below instead.
const EKO_ATLANTIC: [number, number] = [6.4166, 3.4155];
const COASTAL_BACK: [number, number][] = [
  [6.483, 3.77], // Eleko
  [6.475, 3.745], // Igando
  [6.47, 3.71], // Iwesolu
  [6.465, 3.67], // Iwerekun
  [6.46, 3.635], // Mosere Ikoga
  [6.462, 3.62], // Mopo Onijebu
  [6.455, 3.575], // Okun-Ajah
  [6.44, 3.5], // Ilado
  [6.45, 3.427], // Falomo
  EKO_ATLANTIC,
];

// Vote Option A / the Ikorodu/Imota inland loop that lost the rider vote
// to Option B. See the comment above — vote-history data only.
export const ROUTE_VOTE_OPTION_A_PATH: [number, number][] = [
  EKO_ATLANTIC,
  [6.596, 3.484], // Majidun / Ebute Ikorodu
  [6.6194, 3.5106], // Ikorodu
  [6.645, 3.548], // Maya
  [6.672, 3.598], // Salabo
  [6.6975, 3.633], // Imota
  [6.6608, 3.707], // Agbowa
  [6.658, 3.78], // Odo
  [6.64, 3.855], // Ketu
  [6.585, 3.875], // Ejirin
  [6.575, 3.93], // Tewon
  [6.5833, 3.9833], // Epe
  [6.47, 3.9], // Alaro City
  [6.455, 3.855], // Ibeju
  ...COASTAL_BACK.slice(1), // Eleko -> ... -> back to Eko Atlantic
];

// Confirmed 2027 Gran Fondo course (vote closed 2026-10-12, Option B
// won) — the real GPS track from the client-provided GPX file
// (assets/gpx/eko170-2027-gran-fondo.gpx — 29,048 raw trackpoints),
// simplified via Douglas-Peucker (epsilon=0.00005deg) down to 441
// points. Used everywhere the official 170KM route map is shown: Home's
// Atlantic Challenge section, the /routes page's own map, and
// /routes/170's own map section.
export const ROUTE_170_PATH: [number, number][] = [
  [6.42257, 3.42414], [6.42264, 3.42454], [6.42248, 3.42978], [6.42245, 3.44190], [6.42220, 3.44610],
  [6.42225, 3.44911], [6.42248, 3.45076], [6.42252, 3.45179], [6.42253, 3.46837], [6.42271, 3.46949],
  [6.42317, 3.47079], [6.42364, 3.47161], [6.42516, 3.47378], [6.42535, 3.47442], [6.42548, 3.47565],
  [6.42555, 3.47710], [6.42539, 3.48308], [6.42548, 3.48579], [6.42513, 3.49363], [6.42517, 3.49582],
  [6.42540, 3.50006], [6.42586, 3.50493], [6.42616, 3.50684], [6.42750, 3.52263], [6.42803, 3.53035],
  [6.42799, 3.53158], [6.42780, 3.53335], [6.42678, 3.53751], [6.42654, 3.53894], [6.42643, 3.54008],
  [6.42628, 3.54406], [6.42526, 3.54818], [6.42497, 3.54991], [6.42488, 3.55138], [6.42475, 3.56120],
  [6.42496, 3.56288], [6.42586, 3.56651], [6.42627, 3.56949], [6.42672, 3.57179], [6.42950, 3.58278],
  [6.43200, 3.59061], [6.43248, 3.59290], [6.43268, 3.59533], [6.43211, 3.60735], [6.43161, 3.63384],
  [6.43144, 3.63633], [6.43124, 3.63793], [6.43087, 3.63990], [6.42969, 3.64458], [6.42956, 3.64587],
  [6.42934, 3.64688], [6.42929, 3.64770], [6.42901, 3.64908], [6.42856, 3.65055], [6.42698, 3.65467],
  [6.42657, 3.65633], [6.42643, 3.65786], [6.42641, 3.65935], [6.42648, 3.66365], [6.42669, 3.66595],
  [6.42755, 3.67212], [6.42775, 3.67441], [6.42911, 3.70698], [6.43048, 3.72120], [6.43148, 3.72954],
  [6.43235, 3.74003], [6.43263, 3.74206], [6.43489, 3.75416], [6.43627, 3.76266], [6.43734, 3.77005],
  [6.43768, 3.77148], [6.43879, 3.77487], [6.43913, 3.77650], [6.44134, 3.79355], [6.44189, 3.80042],
  [6.44279, 3.80852], [6.44320, 3.82148], [6.44328, 3.82810], [6.44320, 3.83206], [6.44271, 3.84680],
  [6.44234, 3.85078], [6.44236, 3.85288], [6.44246, 3.85386], [6.44233, 3.85408], [6.44169, 3.85420],
  [6.44156, 3.85431], [6.44185, 3.85451], [6.44219, 3.85432], [6.44262, 3.85422], [6.44304, 3.85423],
  [6.44335, 3.85440], [6.44460, 3.85424], [6.44498, 3.85394], [6.44758, 3.85308], [6.44820, 3.85263],
  [6.44876, 3.85238], [6.44995, 3.85217], [6.45181, 3.85156], [6.45499, 3.85080], [6.46547, 3.84791],
  [6.47179, 3.84525], [6.47459, 3.84422], [6.47504, 3.84409], [6.47516, 3.84412], [6.47692, 3.84777],
  [6.47793, 3.84948], [6.48181, 3.85556], [6.48293, 3.85755], [6.48357, 3.85879], [6.48419, 3.86028],
  [6.48501, 3.86285], [6.48537, 3.86440], [6.48562, 3.86623], [6.48571, 3.86931], [6.48458, 3.88255],
  [6.48458, 3.88353], [6.48471, 3.88475], [6.48500, 3.88574], [6.48550, 3.88694], [6.48614, 3.88799],
  [6.48770, 3.88965], [6.48837, 3.89019], [6.48920, 3.89070], [6.48990, 3.89104], [6.49104, 3.89145],
  [6.49279, 3.89175], [6.49465, 3.89176], [6.51147, 3.89089], [6.52010, 3.89056], [6.52196, 3.89060],
  [6.52445, 3.89091], [6.52708, 3.89160], [6.52924, 3.89247], [6.53146, 3.89372], [6.53287, 3.89474],
  [6.53379, 3.89554], [6.53549, 3.89732], [6.53717, 3.89959], [6.53812, 3.90138], [6.53898, 3.90328],
  [6.53959, 3.90508], [6.54410, 3.91995], [6.54462, 3.92146], [6.54550, 3.92354], [6.54662, 3.92568],
  [6.54779, 3.92752], [6.54919, 3.92936], [6.55065, 3.93099], [6.55264, 3.93282], [6.55362, 3.93348],
  [6.55532, 3.93485], [6.55632, 3.93548], [6.56051, 3.93766], [6.56553, 3.94004], [6.56678, 3.94052],
  [6.56961, 3.94185], [6.57054, 3.94242], [6.57519, 3.94475], [6.58184, 3.94869], [6.58343, 3.94978],
  [6.58634, 3.95147], [6.58638, 3.95173], [6.58486, 3.95553], [6.58276, 3.95867], [6.58246, 3.95929],
  [6.58222, 3.96005], [6.58208, 3.96107], [6.58197, 3.96336], [6.58195, 3.96608], [6.58183, 3.96876],
  [6.58157, 3.96976], [6.58098, 3.97071], [6.58054, 3.97205], [6.57992, 3.97331], [6.57988, 3.97381],
  [6.58005, 3.97622], [6.58023, 3.97654], [6.58121, 3.97748], [6.58260, 3.97823], [6.58348, 3.97848],
  [6.58556, 3.97873], [6.58687, 3.97905], [6.58882, 3.97999], [6.58962, 3.98076], [6.59130, 3.98387],
  [6.59204, 3.98479], [6.59272, 3.98530], [6.59300, 3.98539], [6.59358, 3.98537], [6.59945, 3.98395],
  [6.60080, 3.98379], [6.60163, 3.98383], [6.60248, 3.98418], [6.60836, 3.98756], [6.60900, 3.98779],
  [6.60972, 3.98786], [6.61174, 3.98755], [6.61640, 3.98639], [6.62087, 3.98515], [6.62234, 3.98499],
  [6.62348, 3.98513], [6.62826, 3.98615], [6.62938, 3.98626], [6.63201, 3.98635], [6.63386, 3.98655],
  [6.63967, 3.98765], [6.64451, 3.98881], [6.64674, 3.98925], [6.64851, 3.98951], [6.65047, 3.98965],
  [6.65321, 3.98953], [6.65633, 3.98952], [6.65898, 3.98887], [6.66131, 3.98802], [6.66236, 3.98780],
  [6.66646, 3.98784], [6.66913, 3.98803], [6.66918, 3.98797], [6.66910, 3.98791], [6.66842, 3.98794],
  [6.66369, 3.98774], [6.66239, 3.98777], [6.66143, 3.98794], [6.65921, 3.98876], [6.65653, 3.98943],
  [6.65571, 3.98950], [6.65310, 3.98949], [6.65162, 3.98959], [6.64953, 3.98955], [6.64703, 3.98926],
  [6.64439, 3.98872], [6.63968, 3.98760], [6.63406, 3.98653], [6.63145, 3.98626], [6.62841, 3.98613],
  [6.62382, 3.98510], [6.62369, 3.98500], [6.62365, 3.98478], [6.62387, 3.98291], [6.62389, 3.98207],
  [6.62373, 3.98061], [6.62323, 3.97783], [6.62322, 3.97706], [6.62338, 3.97555], [6.62318, 3.97441],
  [6.62289, 3.97367], [6.62246, 3.97295], [6.61978, 3.96957], [6.61935, 3.96875], [6.61901, 3.96757],
  [6.61895, 3.96617], [6.61987, 3.96077], [6.61988, 3.96006], [6.61967, 3.95888], [6.61864, 3.95659],
  [6.61660, 3.95248], [6.61611, 3.95182], [6.61563, 3.95133], [6.61326, 3.94930], [6.61268, 3.94856],
  [6.61227, 3.94755], [6.61210, 3.94638], [6.61183, 3.94298], [6.61195, 3.94214], [6.61235, 3.94087],
  [6.61246, 3.94025], [6.61273, 3.93987], [6.61260, 3.93991], [6.61250, 3.94020], [6.61151, 3.93999],
  [6.61029, 3.94050], [6.60881, 3.94090], [6.60423, 3.94151], [6.60225, 3.94191], [6.60111, 3.94229],
  [6.59981, 3.94284], [6.59567, 3.94476], [6.59307, 3.94550], [6.59224, 3.94597], [6.59121, 3.94693],
  [6.59068, 3.94729], [6.58818, 3.94850], [6.58772, 3.94880], [6.58707, 3.94956], [6.58661, 3.95109],
  [6.58644, 3.95124], [6.58619, 3.95124], [6.57549, 3.94486], [6.57293, 3.94343], [6.56860, 3.94133],
  [6.56062, 3.93764], [6.55707, 3.93581], [6.55514, 3.93462], [6.55273, 3.93280], [6.55049, 3.93069],
  [6.54895, 3.92889], [6.54744, 3.92678], [6.54623, 3.92477], [6.54508, 3.92234], [6.54426, 3.92009],
  [6.53951, 3.90450], [6.53894, 3.90297], [6.53814, 3.90116], [6.53689, 3.89901], [6.53531, 3.89695],
  [6.53374, 3.89538], [6.53275, 3.89455], [6.53148, 3.89363], [6.53055, 3.89306], [6.52901, 3.89228],
  [6.52693, 3.89147], [6.52477, 3.89088], [6.52258, 3.89060], [6.51963, 3.89051], [6.51514, 3.89073],
  [6.51338, 3.89074], [6.50105, 3.89141], [6.49371, 3.89172], [6.49201, 3.89160], [6.49061, 3.89125],
  [6.48930, 3.89069], [6.48816, 3.88994], [6.48759, 3.88949], [6.48677, 3.88864], [6.48580, 3.88724],
  [6.48513, 3.88566], [6.48479, 3.88407], [6.48473, 3.88262], [6.48538, 3.87521], [6.48537, 3.87454],
  [6.48575, 3.87020], [6.48582, 3.86832], [6.48575, 3.86670], [6.48555, 3.86497], [6.48490, 3.86204],
  [6.48404, 3.85961], [6.48266, 3.85681], [6.47770, 3.84897], [6.47692, 3.84760], [6.47530, 3.84420],
  [6.47516, 3.84404], [6.47480, 3.84408], [6.47171, 3.84519], [6.46552, 3.84779], [6.45235, 3.85143],
  [6.45173, 3.85155], [6.45004, 3.85210], [6.44883, 3.85229], [6.44836, 3.85247], [6.44760, 3.85302],
  [6.44595, 3.85364], [6.44445, 3.85399], [6.44321, 3.85409], [6.44304, 3.85395], [6.44292, 3.85145],
  [6.44299, 3.84995], [6.44296, 3.84867], [6.44334, 3.84006], [6.44367, 3.82819], [6.44355, 3.81936],
  [6.44315, 3.80843], [6.44220, 3.80001], [6.44170, 3.79344], [6.43949, 3.77645], [6.43917, 3.77497],
  [6.43780, 3.77054], [6.43729, 3.76774], [6.43677, 3.76410], [6.43536, 3.75536], [6.43309, 3.74308],
  [6.43269, 3.74046], [6.43170, 3.72883], [6.43079, 3.72156], [6.42942, 3.70726], [6.42923, 3.70376],
  [6.42933, 3.70339], [6.42922, 3.70302], [6.42911, 3.70063], [6.42806, 3.67455], [6.42791, 3.67252],
  [6.42692, 3.66542], [6.42677, 3.66339], [6.42672, 3.65786], [6.42694, 3.65592], [6.42740, 3.65435],
  [6.42888, 3.65063], [6.42929, 3.64937], [6.42960, 3.64790], [6.42977, 3.64594], [6.43009, 3.64424],
  [6.43136, 3.63908], [6.43181, 3.63573], [6.43194, 3.63323], [6.43240, 3.60773], [6.43295, 3.59686],
  [6.43296, 3.59525], [6.43290, 3.59376], [6.43253, 3.59145], [6.43208, 3.58983], [6.42995, 3.58330],
  [6.42724, 3.57270], [6.42680, 3.57084], [6.42610, 3.56634], [6.42515, 3.56213], [6.42511, 3.55878],
  [6.42530, 3.55048], [6.42568, 3.54804], [6.42649, 3.54485], [6.42662, 3.54400], [6.42691, 3.53920],
  [6.42728, 3.53705], [6.42780, 3.53529], [6.42816, 3.53353], [6.42837, 3.53184], [6.42841, 3.53022],
  [6.42807, 3.52493], [6.42749, 3.51798], [6.42717, 3.51549], [6.42688, 3.51228], [6.42649, 3.50653],
  [6.42655, 3.50608], [6.42649, 3.50476], [6.42603, 3.50007], [6.42564, 3.49770], [6.42547, 3.49587],
  [6.42544, 3.49354], [6.42573, 3.48670], [6.42571, 3.48239], [6.42586, 3.47696], [6.42550, 3.47179],
  [6.42545, 3.45802], [6.42532, 3.45686], [6.42499, 3.45536], [6.42455, 3.45439], [6.42351, 3.45268],
  [6.42304, 3.45171], [6.42262, 3.45031], [6.42243, 3.44879], [6.42240, 3.44557], [6.42273, 3.44222],
  [6.42267, 3.42757],
];

// Confirmed 94.5KM Medio Fondo course — the real GPS track from
// assets/gpx/eko170-2027-medio-fondo.gpx (14,528 raw trackpoints),
// simplified the same way down to 165 points, replacing the earlier
// hand-traced coastal-corridor approximation.
export const ROUTE_70_PATH: [number, number][] = [
  [6.42260, 3.42427], [6.42247, 3.42984], [6.42245, 3.44207], [6.42221, 3.44613], [6.42225, 3.44889],
  [6.42248, 3.45071], [6.42252, 3.45189], [6.42252, 3.46841], [6.42273, 3.46961], [6.42314, 3.47074],
  [6.42353, 3.47144], [6.42494, 3.47339], [6.42520, 3.47388], [6.42536, 3.47444], [6.42547, 3.47551],
  [6.42555, 3.47696], [6.42539, 3.48276], [6.42547, 3.48557], [6.42515, 3.49289], [6.42517, 3.49576],
  [6.42533, 3.49786], [6.42539, 3.50008], [6.42586, 3.50493], [6.42617, 3.50695], [6.42763, 3.52438],
  [6.42803, 3.53052], [6.42779, 3.53336], [6.42741, 3.53512], [6.42689, 3.53701], [6.42652, 3.53914],
  [6.42628, 3.54409], [6.42527, 3.54821], [6.42497, 3.55001], [6.42480, 3.55566], [6.42475, 3.56120],
  [6.42496, 3.56282], [6.42584, 3.56644], [6.42630, 3.56974], [6.42672, 3.57181], [6.42960, 3.58317],
  [6.43202, 3.59070], [6.43249, 3.59292], [6.43268, 3.59503], [6.43211, 3.60786], [6.43161, 3.63387],
  [6.43152, 3.63566], [6.43134, 3.63729], [6.43099, 3.63937], [6.42971, 3.64460], [6.42910, 3.64876],
  [6.42857, 3.65056], [6.42691, 3.65489], [6.42657, 3.65635], [6.42642, 3.65803], [6.42649, 3.66358],
  [6.42667, 3.66581], [6.42753, 3.67197], [6.42775, 3.67442], [6.42912, 3.70709], [6.43048, 3.72122],
  [6.43147, 3.72955], [6.43235, 3.74005], [6.43265, 3.74217], [6.43489, 3.75426], [6.43626, 3.76262],
  [6.43735, 3.77008], [6.43769, 3.77149], [6.43870, 3.77459], [6.43916, 3.77667], [6.44134, 3.79366],
  [6.44190, 3.80051], [6.44277, 3.80823], [6.44313, 3.81775], [6.44327, 3.82811], [6.44273, 3.84629],
  [6.44251, 3.84883], [6.44264, 3.84910], [6.44290, 3.84915], [6.44299, 3.84906], [6.44321, 3.84402],
  [6.44367, 3.82827], [6.44355, 3.81931], [6.44313, 3.80818], [6.44225, 3.80050], [6.44171, 3.79352],
  [6.43947, 3.77625], [6.43921, 3.77507], [6.43809, 3.77159], [6.43769, 3.76997], [6.43742, 3.76814],
  [6.43728, 3.76770], [6.43666, 3.76336], [6.43535, 3.75531], [6.43316, 3.74344], [6.43267, 3.74021],
  [6.43170, 3.72889], [6.43079, 3.72152], [6.42942, 3.70722], [6.42924, 3.70377], [6.42933, 3.70339],
  [6.42921, 3.70290], [6.42803, 3.67389], [6.42791, 3.67253], [6.42696, 3.66566], [6.42677, 3.66331],
  [6.42671, 3.65820], [6.42692, 3.65610], [6.42732, 3.65459], [6.42887, 3.65063], [6.42927, 3.64937],
  [6.42958, 3.64802], [6.42998, 3.64478], [6.43125, 3.63963], [6.43176, 3.63623], [6.43193, 3.63313],
  [6.43241, 3.60766], [6.43298, 3.59552], [6.43284, 3.59330], [6.43252, 3.59141], [6.43205, 3.58974],
  [6.42988, 3.58303], [6.42718, 3.57247], [6.42663, 3.56982], [6.42612, 3.56636], [6.42537, 3.56329],
  [6.42516, 3.56210], [6.42520, 3.56182], [6.42510, 3.56056], [6.42511, 3.55879], [6.42530, 3.55049],
  [6.42568, 3.54805], [6.42647, 3.54499], [6.42664, 3.54400], [6.42678, 3.54044], [6.42691, 3.53921],
  [6.42728, 3.53705], [6.42782, 3.53524], [6.42817, 3.53353], [6.42837, 3.53179], [6.42841, 3.53019],
  [6.42749, 3.51795], [6.42718, 3.51555], [6.42671, 3.50989], [6.42650, 3.50672], [6.42655, 3.50606],
  [6.42649, 3.50475], [6.42605, 3.50025], [6.42560, 3.49731], [6.42546, 3.49535], [6.42551, 3.49118],
  [6.42573, 3.48673], [6.42571, 3.48239], [6.42585, 3.47697], [6.42551, 3.47195], [6.42546, 3.45812],
  [6.42530, 3.45675], [6.42499, 3.45536], [6.42452, 3.45435], [6.42360, 3.45284], [6.42312, 3.45189],
  [6.42262, 3.45031], [6.42242, 3.44868], [6.42241, 3.44552], [6.42273, 3.44188], [6.42265, 3.42708],
];

export const ROUTE_STATS: RouteStat[] = [
  { id: "route-distance", label: "Distance", value: "~170KM" },
  { id: "route-elevation", label: "Elevation", value: "Moderate rolling" },
  { id: "route-start", label: "Start", value: "Eko Atlantic Blvd" },
  { id: "route-finish", label: "Finish", value: "Eko Atlantic Blvd" },
];

export const ROUTE_HIGHLIGHTS: string[] = [
  "Coastal stretch through Ahmadu Bello Way & Ozumba Mbadiwe",
  "Lekki–Ikoyi Bridge crossing — Lagos' architectural landmark",
  "Lekki Free Trade Zone & Dangote Refinery corridor",
  "Scenic Epe countryside turnaround & festival-style finish",
];

export const ROUTE_CATEGORY_CARDS: RouteCategoryCard[] = [
  {
    id: "category-170",
    image: "/images/eko170-170.jpeg",
    distanceValue: "170",
    distanceSuffix: "KM",
    title: "Gran Fondo",
    description:
      "The flagship route for elite and seasoned cyclists — the complete 170KM journey from Eko Atlantic City to Epe and back.",
    href: "/routes/170",
  },
  {
    id: "category-70",
    image: "/images/eko170-94.5.jpeg",
    distanceValue: "94.5",
    distanceSuffix: "KM",
    title: "Medio Fondo",
    description:
      "A balanced 94.5KM route for strong riders — festival energy across Lekki–Ikoyi Bridge and Lekki Phase 1.",
    href: "/routes/70",
  },
];

export const SUPPORT_FEATURES: SupportFeature[] = [
  {
    id: "support-stations",
    title: "10+ Support Stations",
    description:
      "Hydration, nutrition, and mechanical support along the full route.",
  },
  {
    id: "support-medical",
    title: "Medical Coverage",
    description:
      "On-course medical teams and ambulance support throughout race day.",
  },
  {
    id: "support-closed-roads",
    title: "Roads Fully Closed",
    description:
      "No cars. No okadas. No chaos. Just you, your bike, and the open road.",
  },
  {
    id: "support-timed",
    title: "Timed & Ranked",
    description:
      "Chip-timed results published live and archived for every finisher.",
  },
];

export const ROUTE_SUBNAV_LINKS: { id: string; label: string; href: string }[] = [
  { id: "introduction", label: "Introduction", href: "#introduction" },
  { id: "route-description", label: "Route Description", href: "#route-description" },
  { id: "map", label: "Route Map", href: "#map" },
  { id: "start", label: "Start-Line", href: "#start" },
  { id: "finish", label: "Finish Line", href: "#finish" },
  { id: "faqs", label: "Entries & FAQs", href: "#faqs" },
];

export const ROUTE_START_CHECKLIST: string[] = [
  "Your number board, cable-tied to your handlebars, facing forward.",
  "Your race number, worn low down on the back of your cycling shirt.",
  "Your timing chip, fixed to your bicycle and clearly visible.",
  "Your helmet — no helmet, no ride.",
];

export const ROUTE_FAQS: RouteFaq[] = [
  {
    id: "faq-withdraw",
    question: "Can I withdraw from EKO170?",
    answer:
      "Full details will be published in the official rider guide ahead of race week. For urgent queries contact info@eko170.com.",
  },
  {
    id: "faq-substitution-enter",
    question: "How do I enter as a substitution?",
    answer:
      "Full details will be published in the official rider guide ahead of race week. For urgent queries contact info@eko170.com.",
  },
  {
    id: "faq-substitution-fee",
    question: "What is the substitution fee?",
    answer:
      "Full details will be published in the official rider guide ahead of race week. For urgent queries contact info@eko170.com.",
  },
  {
    id: "faq-race-number",
    question: "When will my race number be available for collection?",
    answer:
      "Full details will be published in the official rider guide ahead of race week. For urgent queries contact info@eko170.com.",
  },
  {
    id: "faq-confirmation",
    question: "When will I receive confirmation of my entry?",
    answer:
      "Full details will be published in the official rider guide ahead of race week. For urgent queries contact info@eko170.com.",
  },
  {
    id: "faq-consent-letter",
    question: "Where do I send my substitution consent letter?",
    answer:
      "Full details will be published in the official rider guide ahead of race week. For urgent queries contact info@eko170.com.",
  },
];

export const ROUTE_170_DETAIL: RouteDetailData = {
  slug: "170",
  navLabel: "EKO 170",
  raceName: "Gran Fondo",
  distanceLabel: "EKO 170",
  heroImage: "/images/DSC_2320.jpg",
  routeDescriptionImage: "/images/DSC_2320.jpg",
  startImage: "/images/sm-CR2A2942.jpg",
  finishImage: "/images/g-CR2A3170.jpg",
  price: "₦35,000",
  earlyBirdPrice: "₦25,000",
  distanceKm: "170 kilometres",
  introEyebrow: "The Full Atlantic Challenge",
  introHeading: "The 170KM EKO170 Lagos Cycle Race",
  introBody:
    "Conquer the ultimate endurance test on this scenic 170km route, where you'll battle the rolling hills of Epe before facing a grueling 47km return leg along the Coastal Road, testing your grit against relentless headwinds that feel like a continuous hill climb all the way to the finish.",
  routeDescHeading: "EKO 170 Route",
  routeDescription:
    "Conquer the ultimate endurance test on this scenic 170km route, where you'll battle the rolling hills of Epe before facing a grueling 47km return leg along the Coastal Road, testing your grit against relentless headwinds that feel like a continuous hill climb all the way to the finish.",
  path: ROUTE_170_PATH,
  startWaveBody:
    "The Eko Atlantic Boulevard Start Precinct welcomes riders for the 170 kilometres — waves roll out from 06:00, at first light.",
  operationalFlowImage: {
    src: "/images/eko170-170.jpeg",
    width: 2000,
    height: 1333,
  },
  elevationProfileImage: {
    src: "/images/eko170-170-eprofile.jpeg",
    width: 2560,
    height: 1440,
  },
  gpxDownload: GPX_DOWNLOADS[0],
};

export const ROUTE_70_DETAIL: RouteDetailData = {
  slug: "70",
  navLabel: "EKO 94.5",
  raceName: "Medio Fondo",
  distanceLabel: "EKO 94.5",
  heroImage: "/images/sm-DSC_1924.jpg",
  routeDescriptionImage: "/images/sm-DSC_1924.jpg",
  startImage: "/images/sm-CR2A2942.jpg",
  finishImage: "/images/g-CR2A3170.jpg",
  price: "₦35,000",
  earlyBirdPrice: "₦25,000",
  distanceKm: "94.5 kilometres",
  introEyebrow: "An Exhilarating Experience",
  introHeading: "The 94.5KM EKO170 Lagos Cycle Race",
  introBody:
    "Experience the thrilling energy of mass participation on this fast-paced half-distance ride, perfectly tailored for fitness riders who want to bypass the punishing Epe hills but are still ready to test their grit against the brutal coastal headwinds on the return leg.",
  routeDescHeading: "EKO 94.5 Route",
  routeDescription:
    "Experience the thrilling energy of mass participation on this fast-paced half-distance ride, perfectly tailored for fitness riders who want to bypass the punishing Epe hills but are still ready to test their grit against the brutal coastal headwinds on the return leg.",
  path: ROUTE_70_PATH,
  startWaveBody:
    "The Eko Atlantic Boulevard Start Precinct welcomes riders for the 94.5 kilometres — waves roll out from 06:45, shortly after the 170km riders.",
  operationalFlowImage: {
    src: "/images/eko170-94.5.jpeg",
    width: 2560,
    height: 1564,
  },
  elevationProfileImage: {
    src: "/images/eko170-94.5-eprofile.jpeg",
    width: 2560,
    height: 1440,
  },
  gpxDownload: GPX_DOWNLOADS[1],
};
