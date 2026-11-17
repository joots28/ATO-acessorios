export type Category = { id: string; name: string; short: string; items: number; desc: string };
export type Product = {
  id: string; cat: string; name: string; code: string; material: string; finish: string;
  specs: [string, string][]; featured?: boolean;
};

export const WHATSAPP = "5500000000000"; // TODO: número oficial da ATO
export const wa = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const categories: Category[] = [
  { id: "dobradicas", name: "Dobradiças", short: "Dobradiças", items: 310, desc: "Caneco 35 mm, curvas e retas, com e sem amortecimento." },
  { id: "corredicas", name: "Corrediças", short: "Corrediças", items: 280, desc: "Telescópicas, ocultas e roller para gavetas." },
  { id: "puxadores", name: "Puxadores", short: "Puxadores", items: 420, desc: "Alumínio, zamac e perfis em diversos acabamentos." },
  { id: "perfis", name: "Perfis, trilhos e acabamentos de alumínio", short: "Perfis de alumínio", items: 260, desc: "Perfis, trilhos e acabamentos técnicos." },
  { id: "deslizantes", name: "Sistemas deslizantes e roldanas", short: "Deslizantes", items: 190, desc: "Kits de portas de correr, roldanas e guias." },
  { id: "pistoes", name: "Pistões, articuladores e amortecedores", short: "Pistões", items: 170, desc: "Pistões a gás, articuladores e amortecedores." },
  { id: "fechaduras", name: "Fechaduras, fechos e travas", short: "Fechaduras", items: 210, desc: "Fechaduras para portas, gavetas e armários." },
  { id: "parafusos", name: "Parafusos e fixadores", short: "Parafusos", items: 340, desc: "Parafusos, buchas, cavilhas e minifix." },
  { id: "suportes", name: "Suportes e cantoneiras", short: "Suportes", items: 180, desc: "Suportes de prateleira, mão-francesa e cantoneiras." },
  { id: "pes", name: "Pés, rodízios e sapatas", short: "Pés e rodízios", items: 200, desc: "Pés reguláveis, rodízios e sapatas." },
  { id: "fitas", name: "Fitas de borda PVC/ABS", short: "Fitas de borda", items: 230, desc: "Fitas de borda em dezenas de cores e texturas." },
  { id: "tapa", name: "Tapa-furos e acabamentos", short: "Tapa-furos", items: 120, desc: "Tapa-furos, batentes e acabamentos." },
  { id: "colas", name: "Colas, adesivos e selantes", short: "Colas e selantes", items: 90, desc: "Colas de contato, PU, silicones e selantes." },
  { id: "organizadores", name: "Organizadores internos e aramados", short: "Aramados", items: 130, desc: "Cestos, sapateiras, porta-calças e organizadores." },
  { id: "iluminacao", name: "Iluminação e elétrica para móveis", short: "Iluminação", items: 90, desc: "Fitas LED, fontes, sensores e perfis luminosos." },
];

const p = (cat: string, name: string, material: string, finish: string, specs: [string, string][], featured = false): Omit<Product, "id" | "code"> => ({ cat, name, material, finish, specs, featured });

const raw = [
  p("dobradicas", "Dobradiça Caneco 35 mm com Amortecimento", "Aço", "Níquel", [["Ângulo", "110°"], ["Caneco", "35 mm"], ["Tipo", "Curva / Reta / Supercurva"], ["Amortecimento", "Integrado"]], true),
  p("dobradicas", "Dobradiça Reta 35 mm sem Amortecimento", "Aço", "Níquel", [["Ângulo", "110°"], ["Caneco", "35 mm"], ["Tipo", "Reta"]]),
  p("dobradicas", "Dobradiça para Vidro 35 mm", "Aço", "Cromado", [["Espessura vidro", "4 a 6 mm"], ["Ângulo", "105°"]]),
  p("dobradicas", "Dobradiça 165° Abertura Total", "Aço", "Níquel", [["Ângulo", "165°"], ["Caneco", "35 mm"], ["Amortecimento", "Opcional"]]),
  p("corredicas", "Corrediça Telescópica 45 mm", "Aço zincado", "Zincado", [["Comprimentos", "250 a 600 mm"], ["Capacidade", "até 35 kg"], ["Extensão", "Total"]], true),
  p("corredicas", "Corrediça Oculta com Amortecimento", "Aço", "Zincado", [["Comprimentos", "300 a 550 mm"], ["Capacidade", "até 30 kg"], ["Fechamento", "Soft close"]]),
  p("corredicas", "Corrediça Roller Simples", "Aço", "Zincado", [["Comprimentos", "250 a 500 mm"], ["Capacidade", "até 15 kg"]]),
  p("corredicas", "Corrediça Telescópica Pesada 53 mm", "Aço", "Preto", [["Comprimentos", "400 a 800 mm"], ["Capacidade", "até 60 kg"]]),
  p("puxadores", "Puxador de Alumínio Perfil Slim", "Alumínio", "Anodizado Fosco", [["Entre furos", "128 / 160 / 192 / 320 mm"], ["Comprimento", "até 1200 mm"]], true),
  p("puxadores", "Puxador Gola em Alumínio", "Alumínio", "Preto Fosco", [["Barra", "3 m"], ["Aplicação", "Portas e gavetas"]]),
  p("puxadores", "Puxador Concha Zamac", "Zamac", "Cromado", [["Entre furos", "32 mm"], ["Largura", "64 mm"]]),
  p("puxadores", "Puxador Ponto Zamac", "Zamac", "Dourado Escovado", [["Diâmetro", "30 mm"], ["Rosca", "M4"]]),
  p("perfis", "Perfil U Alumínio para Acabamento", "Alumínio", "Anodizado", [["Barra", "3 m"], ["Espessura", "15 / 18 mm"]]),
  p("perfis", "Trilho Superior para Porta de Correr", "Alumínio", "Natural", [["Barra", "3 m"], ["Canais", "1 / 2 / 3"]]),
  p("perfis", "Perfil H Divisor", "Alumínio", "Fosco", [["Barra", "3 m"], ["Espessura", "6 mm"]]),
  p("deslizantes", "Kit Porta de Correr para Armário", "Aço / Alumínio", "Anodizado", [["Peso máx.", "até 40 kg"], ["Vão", "até 2,4 m"], ["Inclui", "Trilhos, roldanas e guias"]], true),
  p("deslizantes", "Roldana com Rolamento para Porta", "Nylon / Aço", "Zincado", [["Carga", "até 25 kg"], ["Rolamento", "Selado"]]),
  p("deslizantes", "Kit Porta Deslizante Embutida", "Aço", "Preto", [["Peso máx.", "até 80 kg"], ["Fechamento", "Soft close"]]),
  p("pistoes", "Pistão a Gás para Basculante", "Aço", "Preto", [["Força", "20 a 120 N"], ["Curso", "100 mm"]], true),
  p("pistoes", "Articulador Basculante Pantográfico", "Aço", "Zincado", [["Aplicação", "Portas superiores"], ["Abertura", "90°"]]),
  p("pistoes", "Amortecedor de Porta e Gaveta", "Plástico técnico", "Branco", [["Instalação", "Embutir / Sobrepor"]]),
  p("fechaduras", "Fechadura para Gaveta 19 mm", "Zamac", "Cromado", [["Chaves", "2 unidades"], ["Haste", "19 mm"]]),
  p("fechaduras", "Fecho de Móvel Cilíndrico", "Zamac", "Níquel", [["Diâmetro", "22 mm"]]),
  p("fechaduras", "Trava Magnética para Porta", "Plástico / Imã", "Branco", [["Força", "5 kg"]]),
  p("parafusos", "Parafuso Chipboard Phillips 4,0 x 40", "Aço", "Zincado", [["Cabeça", "Panela / Chata"], ["Embalagem", "Caixa 500 un."]], true),
  p("parafusos", "Minifix com Cavilha", "Zamac / Aço", "Zincado", [["Diâmetro", "15 mm"], ["Cavilha", "8 x 34 mm"]]),
  p("parafusos", "Bucha de Nylon 6 mm", "Nylon", "Natural", [["Diâmetro", "6 mm"], ["Embalagem", "Cento"]]),
  p("suportes", "Mão-Francesa Reforçada", "Aço", "Branco", [["Tamanhos", "15 a 40 cm"], ["Carga", "até 50 kg"]]),
  p("suportes", "Suporte de Prateleira Invisível", "Aço", "Zincado", [["Carga", "até 25 kg"], ["Haste", "10 mm"]]),
  p("suportes", "Cantoneira em L", "Aço", "Zincado", [["Medidas", "20 a 50 mm"]]),
  p("pes", "Pé Regulável Plástico", "Polipropileno", "Preto", [["Altura", "100 a 150 mm"], ["Carga", "até 150 kg"]]),
  p("pes", "Rodízio com Freio", "Aço / Borracha", "Zincado", [["Diâmetro", "50 mm"], ["Carga", "40 kg"]]),
  p("pes", "Sapata de Móvel Autoadesiva", "Feltro", "Cinza", [["Diâmetro", "25 mm"]]),
  p("fitas", "Fita de Borda PVC 22 mm Branco TX", "PVC", "Branco TX", [["Largura", "22 / 35 / 45 mm"], ["Espessura", "0,45 / 1,0 mm"], ["Rolo", "20 / 50 m"]], true),
  p("fitas", "Fita de Borda ABS Amadeirada", "ABS", "Carvalho", [["Largura", "22 mm"], ["Espessura", "1,0 mm"]]),
  p("fitas", "Fita de Borda PVC Preto Fosco", "PVC", "Preto", [["Largura", "22 / 35 mm"], ["Rolo", "50 m"]]),
  p("tapa", "Tapa-furo Adesivo 20 mm", "PVC", "Várias cores", [["Diâmetro", "20 mm"]]),
  p("tapa", "Tapa-furo Minifix", "PVC", "Várias cores", [["Diâmetro", "15 mm"]]),
  p("tapa", "Batente de Silicone Transparente", "Silicone", "Transparente", [["Diâmetro", "10 mm"]]),
  p("colas", "Cola de Contato Industrial", "Solvente", "Bege", [["Volume", "750 ml / 3,6 L"]]),
  p("colas", "Selante PU para Madeira", "Poliuretano", "Branco", [["Cartucho", "280 ml"]]),
  p("colas", "Silicone Acético Incolor", "Silicone", "Incolor", [["Cartucho", "280 g"]]),
  p("organizadores", "Porta-calças Extensível", "Aço", "Cromado", [["Largura", "400 a 600 mm"], ["Extensão", "Total"]]),
  p("organizadores", "Cesto Aramado Deslizante", "Aço", "Cromado", [["Largura", "400 a 800 mm"]]),
  p("organizadores", "Sapateira Extraível", "Aço", "Preto", [["Capacidade", "6 pares"]]),
  p("iluminacao", "Fita LED 12 V 4000 K", "PCB / Silicone", "Branco neutro", [["Tensão", "12 V"], ["Potência", "9,6 W/m"], ["Rolo", "5 m"]], true),
  p("iluminacao", "Fonte Slim 12 V 60 W", "Metal", "—", [["Entrada", "Bivolt"], ["Saída", "12 V / 5 A"]]),
  p("iluminacao", "Sensor de Presença para Porta", "ABS", "Preto", [["Tensão", "12 / 24 V"]]),
  p("iluminacao", "Perfil Luminoso de Embutir", "Alumínio", "Anodizado", [["Barra", "2 m"], ["Difusor", "Leitoso"]]),
];

export const products: Product[] = raw.map((r, i) => ({ ...r, id: `p${i + 1}`, code: `ATO-${String(1000 + i * 7)}` }));
