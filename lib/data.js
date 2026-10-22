export const PHONE = "9049733029";
export const WHATSAPP = "9049733029";
export const WA_DISPLAY = "+91 90497 33029";
const WA_HELLO = "Hello Home Gas Repair, I need a doorstep gas appliance repair in Pune.";
export const waLink = (text = WA_HELLO) => `https://wa.me/91${WHATSAPP}?text=${encodeURIComponent(text)}`;
export const services = [
  ['Gas Stove Repair','Low flame, ignition trouble, leaks and burner problems fixed at your door.'],
  ['Gas Hob Repair','Ignition failure, blocked burners, glass issues and gas leaks on built-in hobs.'],
  ['Gas Cooktop Repair','Burner blockage, low flame and glass-top problems on all cooktop models.'],
  ['Cooking Range Repair','Oven not heating, burner faults and ignition problems on cooking ranges.'],
  ['Copper Gas Pipeline','Leak-proof copper pipe fitting for homes and commercial kitchens.'],
  ['Annual Maintenance (AMC)','Regular servicing, safety checks and priority support all year.']
];
export const steps = [
  ['Book your service','Call or message us and pick a time that suits you.'],
  ['Technician visits','A certified technician arrives equipped to inspect and diagnose.'],
  ['Clear estimate','You get an upfront quote with no hidden charges.'],
  ['Quick repair','We repair using genuine spare parts, usually in the first visit.']
];
export const why = [
  ['Certified technicians','Trained on every major brand, from basic stoves to built-in hobs and ranges.'],
  ['Same-day doorstep service','Most issues are fixed in a single visit across Pune and PCMC.'],
  ['Transparent pricing','Upfront charges and genuine spare parts. No surprises.'],
  ['All gas appliances','Stoves, hobs, cooktops, ovens and cooking ranges.'],
  ['Safety first','Strict safety standards and proper tools on every job.'],
  ['All leading brands','Faber, Elica, Glen, Kaff, Prestige, Sunflame, Bosch, Pigeon, Whirlpool, Hindware, LG, IFB and more.']
];
export const brands = ['Faber','Elica','Glen','Kaff','Prestige','Sunflame','Bosch','Pigeon','Whirlpool','Hindware','LG','IFB','Bajaj','Kutchina','Surya','Haefele','Suraksha','Sunshine','Apex','Jyoti'];
export const reviews = [
  ['Rohit S.','Excellent service! The technician fixed my gas hob within 30 minutes. Very professional and polite.'],
  ['Anamika P.','Quick response and same-day repair. The team explained everything clearly and pricing was transparent.'],
  ['Sanjay T.','They repaired my built-in hob that other technicians couldn’t fix. My go-to service provider.']
];
export const areas = ['Kothrud','Baner','Aundh','Wakad','Hinjewadi','Hadapsar','Viman Nagar','Kharadi','Magarpatta','Pimple Saudagar','Pimpri Chinchwad','Shivaji Nagar','Koregaon Park','Kondhwa','Katraj','Warje','Bavdhan','Pashan','Wagholi','Nigdi','Akurdi','Ravet','Balewadi','Swargate'];
export const SITE = 'https://www.urbangasstoverepairing.com';
export const EMAIL = 'info@urbangasstoverepairing.com';
export const svc = [
 {slug:'gas-stove-repair-and-service',title:'Gas Stove Repair and Service',short:services[0][1],intro:'From a weak flame to a stove that will not light, our technicians diagnose at your home and fix it with genuine parts, on auto-ignition and manual stoves alike.',issues:['Low or yellow flame','Auto-ignition not sparking','Knob stuck or too tight','Gas smell near the burner','Blocked or corroded burner heads','Loose rubber tube or regulator joint']},
 {slug:'gas-hob-repair-and-service',title:'Gas Hob Repair and Service',short:services[1][1],intro:'Built-in hobs need careful handling. We fix ignition, burner and glass problems for all major hob brands without damaging your countertop.',issues:['Ignition failure or clicking without a flame','Burner blockage and uneven flame','Cracked or loose glass top','Faulty thermocouple or flame-failure device','Gas leakage at joints','Knobs not turning smoothly']},
 {slug:'gas-cooktop-repair-and-service',title:'Gas Cooktop Repair and Service',short:services[2][1],intro:'Expert repair for gas cooktops of all models. We restore a strong, even flame and make sure every connection is leak-free.',issues:['Ignition issues','Low flame','Burner blockage','Gas leaks','Glass problems','Pan supports and burner caps worn out']},
 {slug:'gas-cooking-range-repair-and-service',title:'Gas Cooking Range Repair and Service',short:services[3][1],intro:'Cooking ranges combine burners and an oven, so faults can hide in either. We test the whole range and repair what is actually wrong.',issues:['Oven not heating','Oven igniter or burner faults','Cooktop burner problems','Ignition faults','Gas leaks','Door seal and temperature issues']},
 {slug:'copper-gas-pipeline-installation',title:'Copper Gas Pipeline Installation',short:services[4][1],intro:'Safe, durable and leak-proof copper gas pipelines for homes and commercial spaces, planned for a proper layout and secure connections.',issues:['New kitchen pipeline layout','Shifting or extending an existing line','Leak-proof joints and fittings','Reliable gas flow to every appliance','Commercial kitchen installations','Installation and uninstallation of appliances']},
 {slug:'annual-maintenance-contract',title:'AMC (Annual Maintenance Contracts)',short:services[5][1],intro:'Affordable yearly plans that keep your stove, hob, cooktop or range safe and efficient, with priority support when something goes wrong.',issues:['Scheduled servicing through the year','Routine safety checks','Priority booking','Burner and ignition cleaning','Covers stoves, hobs, cooktops and ranges','One trusted technician team']}
];
export const faqs = [
 ['How much does a home visit cost?','The home visit is Rs.99. After inspection we give a clear quote before any repair starts.'],
 ['How fast can a technician reach me?','We offer same-day doorstep service, often within 30 minutes depending on your locality.'],
 ['Do you use genuine spare parts?','Yes. Repairs use genuine spare parts and proper safety practices.'],
 ['Which brands do you repair?','All major brands including Faber, Elica, Glen, Kaff, Prestige, Sunflame, Bosch, Pigeon, Whirlpool, Hindware, LG and IFB.'],
 ['Which areas do you cover?','All of Pune and PCMC, including Kothrud, Baner, Aundh, Wakad, Hadapsar, Viman Nagar, Kharadi, Hinjewadi and Magarpatta.'],
 ['Do you offer annual maintenance?','Yes. Our AMC covers regular servicing, safety checks and priority support.']
];
export const problems = [['Low or yellow flame','Usually blocked burner holes or a dirty injector.'],['No spark or ignition','Worn igniter, battery or wiring fault.'],['Gas smell','Check the regulator, tube and joints.'],['Oven not heating','Faulty igniter or oven burner in a cooking range.'],['Knob stuck','Hardened grease or a worn gas valve.'],['Cracked glass top','Needs careful replacement on hobs and cooktops.']];
export const legal = {
 'privacy-policy':{t:'Privacy Policy',p:['We collect only the details you share with us: your name, phone number, locality, appliance and service need. This is used to contact you and schedule your service.','This website has no backend. The booking form opens WhatsApp with your message, so your details are sent through WhatsApp and are handled under its own privacy terms.','We do not sell your personal information. To ask us to delete your details, email '+EMAIL+' or call '+PHONE+'.']},
 'disclaimer':{t:'Disclaimer',p:['Information on this website is general guidance about gas appliance repair and is not a substitute for an on-site inspection.','Final repair charges are quoted after a technician inspects your appliance. Timings such as 30-minute service depend on technician availability and your locality.','Brand names are used only to describe the appliances we repair. We are an independent service provider.']},
 'terms-and-conditions':{t:'Terms and Conditions',p:['By booking a service you agree to provide accurate contact and address details and safe access to the appliance.','The Rs.99 home visit charge covers inspection and diagnosis. Repair and spare part charges are quoted upfront and carried out only after your approval.','Offers such as 25% off are subject to availability and may change without notice.']}
};
