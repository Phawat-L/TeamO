// Sample data for degrees
const degreesData = [
    {
        id: 1,
        name: "ปริญญาวิทยาศาสตร์ วิทยาศาสตร์คอมพิวเตอร์",
        category: "computer-science",
        university: "มหาวิทยาลัยเทคโนโลยี",
        duration: "4 ปี",
        description: "เรียนรู้การเขียนโปรแกรม อัลกอริทึม โครงสร้างข้อมูล และการพัฒนาซอฟต์แวร์",
        totalCost: "฿800,000 - ฿1,200,000"
    },
    {
        id: 2,
        name: "ปริญญาวิทยาศาสตร์ วิทยาศาสตร์ข้อมูล",
        category: "computer-science",
        university: "สถาบันข้อมูล",
        duration: "4 ปี",
        description: "เชี่ยวชาญในการวิเคราะห์ข้อมูล การเรียนรู้ของเครื่อง และวิธีการทางสถิติ",
        totalCost: "฿850,000 - ฿1,300,000"
    },
    {
        id: 3,
        name: "ปริญญาวิศวกรรม วิศวกรรมซอฟต์แวร์",
        category: "engineering",
        university: "วิทยาลัยวิศวกรรม",
        duration: "4 ปี",
        description: "เชี่ยวชาญในการออกแบบซอฟต์แวร์ สถาปัตยกรรม และการพัฒนาระบบ",
        totalCost: "฿820,000 - ฿1,250,000"
    },
    {
        id: 4,
        name: "ปริญญาบริหารธุรกิจ",
        category: "business",
        university: "วิทยาลัยธุรกิจ",
        duration: "4 ปี",
        description: "ศึกษาการบริหารธุรกิจ การเงิน และภาวะผู้นำองค์กร",
        totalCost: "฿700,000 - ฿1,100,000"
    },
    {
        id: 5,
        name: "ปริญญาพยาบาลศาสตร์",
        category: "healthcare",
        university: "มหาวิทยาลัยแพทยศาสตร์",
        duration: "4 ปี",
        description: "เตรียมตัวสำหรับอาชีพที่보보รุณและสำคัญในสาขาสุขภาพและการดูแลผู้ป่วย",
        totalCost: "฿750,000 - ฿1,150,000"
    },
    {
        id: 6,
        name: "ปริญญาศิลปศาสตร์ จิตวิทยา",
        category: "arts",
        university: "วิทยาลัยศิลปศาสตร์",
        duration: "4 ปี",
        description: "ศึกษาพฤติกรรมมนุษย์ วิทยาศาสตร์การรู้คิด และสุขภาพจิต",
        totalCost: "฿650,000 - ฿1,000,000"
    },
    {
        id: 7,
        name: "ปริญญาวิทยาศาสตร์ ชีววิทยา",
        category: "sciences",
        university: "มหาวิทยาลัยวิทยาศาสตร์",
        duration: "4 ปี",
        description: "สำรวจชีววิทยาของเซลล์ พันธุศาสตร์ และการวิจัยทางชีวแพทย์",
        totalCost: "฿700,000 - ฿1,100,000"
    },
    {
        id: 8,
        name: "ปริญญาโท บริหารธุรกิจ (MBA)",
        category: "business",
        university: "วิทยาลัยธุรกิจชั้นนำ",
        duration: "2 ปี",
        description: "การศึกษาธุรกิจขั้นสูงสำหรับบทบาทภาวะผู้นำและการจัดการ",
        totalCost: "฿1,500,000 - ฿2,500,000"
    },
    {
        id: 9,
        name: "ปริญญาวิทยาศาสตร์ การเตรียมแพทย์",
        category: "healthcare",
        university: "มหาวิทยาลัยแพทยศาสตร์",
        duration: "4 ปี",
        description: "วิชาพื้นฐานสำหรับการเรียนแพทย์ รวมถึงชีววิทยา เคมี เคมีอินทรีย์ และฟิสิกส์",
        totalCost: "฿800,000 - ฿1,200,000"
    },
    {
        id: 10,
        name: "ปริญญาวิทยาศาสตร์ พยาบาลศาสตร์",
        category: "healthcare",
        university: "มหาวิทยาลัยแพทยศาสตร์",
        duration: "4 ปี",
        description: "การศึกษาพยาบาลขั้นสูงรวมถึงการดูแลผู้ป่วย เภสัชวิทยา และทักษะการพยาบาลทางคลินิก",
        totalCost: "฿750,000 - ฿1,150,000"
    },
    {
        id: 11,
        name: "ปริญญากฎหมาย",
        category: "business",
        university: "วิทยาลัยกฎหมาย",
        duration: "4 ปี",
        description: "การศึกษากฎหมายรวมถึงกฎหมายรัฐธรรมนูญ สัญญา กฎหมายอาญา และการประกอบวิชาชีพกฎหมาย",
        totalCost: "฿900,000 - ฿1,400,000"
    },
    {
        id: 12,
        name: "ปริญญาสถาปัตยกรรม",
        category: "engineering",
        university: "สถาบันสถาปัตยกรรม",
        duration: "5 ปี",
        description: "การศึกษาสถาปัตยกรรมรวมถึงหลักการออกแบบ ระบบอาคาร CAD และการจัดการการก่อสร้าง",
        totalCost: "฿1,200,000 - ฿1,800,000"
    },
    {
        id: 13,
        name: "ปริญญาวิศวกรรม (ทั่วไป)",
        category: "engineering",
        university: "มหาวิทยาลัยวิศวกรรม",
        duration: "4 ปี",
        description: "การศึกษาวิศวกรรมทั่วไปรวมถึงหลักพื้นฐาน วิศวกรรมกลศาสตร์ โยธา และไฟฟ้า",
        totalCost: "฿850,000 - ฿1,300,000"
    },
    {
        id: 14,
        name: "ปริญญาศิลปศาสตร์ จิตวิทยา",
        category: "arts",
        university: "มหาวิทยาลัยจิตวิทยา",
        duration: "4 ปี",
        description: "การศึกษาจิตวิทยารวมถึงจิตวิทยาการรู้คิด จิตวิทยาพัฒนาการ และวิธีการวิจัย",
        totalCost: "฿650,000 - ฿1,000,000"
    },
    {
        id: 15,
        name: "ปริญญาเภสัชศาสตร์",
        category: "healthcare",
        university: "วิทยาลัยเภสัชศาสตร์",
        duration: "4 ปี",
        description: "การศึกษาเภสัชศาสตร์รวมถึง เภสัชวิทยา เคมียา เภสัชรูป และการให้คำแนะนำผู้ป่วย",
        totalCost: "฿950,000 - ฿1,500,000"
    },
    {
        id: 16,
        name: "ปริญญาวิทยาศาสตร์ สัตวแพทยศาสตร์",
        category: "sciences",
        university: "มหาวิทยาลัยสัตวแพทยศาสตร์",
        duration: "4 ปี",
        description: "การศึกษาสัตวแพทยศาสตร์รวมถึงกายวิภาคสัตว์ พยาธิสภาพ เภสัชวิทยา และการประกอบวิชาชีพสัตวแพทย์",
        totalCost: "฿900,000 - ฿1,400,000"
    },
    {
        id: 17,
        name: "ปริญญาศิลปศาสตร์ / วิทยาศาสตร์ (ทั่วไป)",
        category: "arts",
        university: "มหาวิทยาลัยศิลปศาสตร์",
        duration: "4 ปี",
        description: "ปริญญาทั่วไปครอบคลุมสาขาต่างๆ รวมถึง มนุษยศาสตร์ วิทยาศาสตร์ และวิทยาศาสตร์สังคม",
        totalCost: "฿600,000 - ฿950,000"
    },
    {
        id: 18,
        name: "ใบรับรอง AWS Certified Solutions Architect",
        category: "computer-science",
        university: "Amazon Web Services",
        duration: "3-6 เดือน",
        description: "ใบรับรองวิศวกรรมระบบคลาวด์ขั้นสูง ครอบคลุมการออกแบบสถาปัตยกรรมโปรแกรมประยุกต์บน AWS และการจัดการสภาพแวดล้อมคลาวด์",
        totalCost: "฿15,000 - ฿25,000"
    },
    {
        id: 19,
        name: "ใบรับรอง Google Cloud Professional Cloud Architect",
        category: "computer-science",
        university: "Google Cloud",
        duration: "3-6 เดือน",
        description: "ใบรับรองผู้เชี่ยวชาญด้านการออกแบบสถาปัตยกรรมโปรแกรมประยุกต์บน Google Cloud Platform พร้อมทำให้ระบบเหมาะสมและปรับปรุงประสิทธิภาพ",
        totalCost: "฿12,000 - ฿20,000"
    },
    {
        id: 20,
        name: "ใบรับรอง Microsoft Azure Solutions Architect Expert",
        category: "computer-science",
        university: "Microsoft",
        duration: "2-4 เดือน",
        description: "ใบรับรองผู้เชี่ยวชาญด้านการออกแบบและสถาปัตยกรรมสารละลายบน Microsoft Azure รวมถึงการจัดการสารถ้อมแรม การซิงโครไนซ์ข้อมูล และการรักษาความปลอดภัย",
        totalCost: "฿10,000 - ฿18,000"
    },
    {
        id: 21,
        name: "ใบรับรอง Oracle Certified Associate Java Programmer",
        category: "computer-science",
        university: "Oracle",
        duration: "2-3 เดือน",
        description: "ใบรับรองมืออาชีพการเขียนโปรแกรม Java ครอบคลุมพื้นฐาน Java วัตถุเชิงวิวัฒนาการ และการพัฒนาโปรแกรมประยุกต์",
        totalCost: "฿8,000 - ฿15,000"
    },
    {
        id: 22,
        name: "ใบรับรอง Kubernetes Administrator (CKA)",
        category: "computer-science",
        university: "Cloud Native Computing Foundation",
        duration: "4-8 เดือน",
        description: "ใบรับรองผู้บริหารระบบ Kubernetes สำหรับการเดินเครื่องและจัดการตัวแทนคอนเทนเนอร์ รวมถึงการปรับใช้และการบำรุงรักษา",
        totalCost: "฿18,000 - ฿28,000"
    },
    {
        id: 23,
        name: "ใบรับรอง CompTIA Security+",
        category: "computer-science",
        university: "CompTIA",
        duration: "2-3 เดือน",
        description: "ใบรับรองความปลอดภัยระดับมืออาชีพที่ครอบคลุมหลักการความปลอดภัย การจัดการความเสี่ยง และการรักษาความปลอดภัยเครือข่าย",
        totalCost: "฿6,000 - ฿12,000"
    },
    {
        id: 24,
        name: "ใบรับรอง Docker Certified Associate",
        category: "computer-science",
        university: "Docker",
        duration: "1-3 เดือน",
        description: "ใบรับรองผู้เชี่ยวชาญการจัดการคอนเทนเนอร์ Docker ครอบคลุมการสร้างภาพ การเดินเครื่อง และการจัดประเภท Docker ในสภาพแวดล้อมการผลิต",
        totalCost: "฿10,000 - ฿16,000"
    },
    {
        id: 25,
        name: "ใบรับรอง HashiCorp Certified: Terraform Associate",
        category: "computer-science",
        university: "HashiCorp",
        duration: "1-2 เดือน",
        description: "ใบรับรองการจัดการโครงสร้างพื้นฐานแบบรหัส โดยใช้ Terraform ครอบคลุมการเขียนไฟล์กำหนดค่า การปรับใช้ และการจัดการเวอร์ชันสำหรับคลาวด์",
        totalCost: "฿5,000 - ฿10,000"
    }
];

// Sample data for job openings
const jobOpeningsData = [
    {
        id: 1,
        title: "Senior Software Developer",
        category: "software",
        company: "บริษัทเทคโนโลยี",
        location: "กรุงเทพ ประเทศไทย",
        salary: "฿80,000 - ฿120,000",
        description: "นำการพัฒนาแอปพลิเคชันที่ปรับขนาดได้โดยใช้เทคโนโลยีสมัยใหม่",
        requirements: "5+ ปีประสบการณ์ ความชำนาญใน Java/Python ความรู้เรื่องการออกแบบระบบ"
    },
    {
        id: 2,
        title: "Data Scientist",
        category: "data",
        company: "บริษัทวิเคราะห์ข้อมูล",
        location: "กรุงเทพ ประเทศไทย",
        salary: "฿70,000 - ฿110,000",
        description: "วิเคราะห์ชุดข้อมูลที่ซับซ้อนและสร้างแบบจำลองการเรียนรู้ของเครื่อง",
        requirements: "3+ ปีประสบการณ์ Python กรอบการเรียนรู้ของเครื่อง SQL"
    },
    {
        id: 3,
        title: "UX/UI Designer",
        category: "design",
        company: "สตูดิโอสร้างสรรค์",
        location: "กรุงเทพ ประเทศไทย",
        salary: "฿50,000 - ฿85,000",
        description: "ออกแบบอินเทอร์เฟสผู้ใช้ที่ใช้งานง่ายและทำการวิจัยผู้ใช้",
        requirements: "3+ ปีประสบการณ์ Figma/Adobe XD หลักการ UI/UX"
    },
    {
        id: 4,
        title: "Marketing Manager",
        category: "marketing",
        company: "โซลูชันแบรนด์",
        location: "กรุงเทพ ประเทศไทย",
        salary: "฿45,000 - ฿75,000",
        description: "พัฒนาและดำเนินการกลยุทธ์การตลาดสำหรับแคมเปญดิจิทัล",
        requirements: "3+ ปีประสบการณ์ การวิเคราะห์การตลาด การจัดการแคมเปญ"
    },
    {
        id: 5,
        title: "Sales Executive",
        category: "sales",
        company: "พลวัตการขาย",
        location: "กรุงเทพ ประเทศไทย",
        salary: "฿35,000 - ฿80,000",
        description: "ขับเคลื่อนการเติบโตของรายได้ผ่านความสัมพันธ์กับไคลเอนต์และกลยุทธ์การขาย",
        requirements: "2+ ปีประสบการณ์ ระบบจัดการความสัมพันธ์ของลูกค้า ทักษะการเจรจา"
    },
    {
        id: 6,
        title: "Junior Developer",
        category: "software",
        company: "ห้องปฏิบัติการสตาร์ทอัป",
        location: "โปรแกรม Remote",
        salary: "฿35,000 - ฿50,000",
        description: "พัฒนาแอปพลิเคชันเว็บและทำงานร่วมกับนักพัฒนาอาวุโส",
        requirements: "เพิ่งเสร็จสิ้นการศึกษาหรือ bootcamp HTML/CSS/JavaScript Git"
    },
    {
        id: 7,
        title: "Financial Analyst",
        category: "finance",
        company: "กลุ่มการเงิน",
        location: "กรุงเทพ ประเทศไทย",
        salary: "฿45,000 - ฿85,000",
        description: "วิเคราะห์ข้อมูลทางการเงินและให้คำแนะนำการลงทุน",
        requirements: "3+ ปีประสบการณ์ Excel การสร้างแบบจำลองทางการเงิน การวิเคราะห์"
    },
    {
        id: 8,
        title: "Machine Learning Engineer",
        category: "data",
        company: "โซลูชัน AI",
        location: "โปรแกรม Remote",
        salary: "฿90,000 - ฿140,000",
        description: "สร้างและปรับใช้แบบจำลองการเรียนรู้ของเครื่องสำหรับระบบการจัดการ",
        requirements: "4+ ปีประสบการณ์ Python TensorFlow/PyTorch การเรียนรู้เชิงลึก"
    },
    {
        id: 9,
        title: "Doctor",
        category: "healthcare",
        company: "โรงพยาบาลแพทยศาสตร์",
        location: "กรุงเทพ ประเทศไทย",
        salary: "฿80,000 - ฿150,000",
        description: "ให้การวินิจฉัยและการรักษาทางการแพทย์แก่ผู้ป่วย ทำงานในสภาพแวดล้อมสุขภาพที่ไดนามิก",
        requirements: "ปริญญาแพทย์ ใบประกาศนียบัตรแพทย์ 2+ ปีประสบการณ์ทางคลินิก"
    },
    {
        id: 10,
        title: "Nurse",
        category: "healthcare",
        company: "ศูนย์การแพทย์เมืองลาดกระบัง",
        location: "กรุงเทพ ประเทศไทย",
        salary: "฿35,000 - ฿60,000",
        description: "ให้การดูแลผู้ป่วย ตรวจสอบสัญญาณชีววิทยาและสนับสนุนการรักษา",
        requirements: "ปริญญาพยาบาล ใบประกาศนียบัตรพยาบาลที่ถูกต้อง ประสบการณ์การดูแลผู้ป่วย"
    },
    {
        id: 11,
        title: "Lawyer",
        category: "legal",
        company: "สมาพันธ์สำนักทนายความ",
        location: "กรุงเทพ ประเทศไทย",
        salary: "฿60,000 - ฿120,000",
        description: "ให้คำปรึกษากฎหมาย แทนจำเลยในศาล และจัดการเอกสารทางกฎหมาย",
        requirements: "ปริญญากฎหมาย สอบและผ่านการสอบทนายความ ประสบการณ์การประกอบวิชาชีพกฎหมาย"
    },
    {
        id: 12,
        title: "Attorney",
        category: "legal",
        company: "บริการกฎหมายขององค์กร",
        location: "กรุงเทพ ประเทศไทย",
        salary: "฿70,000 - ฿130,000",
        description: "จัดการฟ้องร้องขององค์กร สัญญา และเรื่องการปฏิบัติตามกฎระเบียบ",
        requirements: "ปริญญากฎหมาย ใบรับรองทนายความ 3+ ปีประสบการณ์กฎหมาย"
    },
    {
        id: 13,
        title: "Architect",
        category: "design",
        company: "สถาปนิกออกแบบและสร้าง",
        location: "กรุงเทพ ประเทศไทย",
        salary: "฿55,000 - ฿100,000",
        description: "ออกแบบอาคารและโครงสร้าง สร้างแบบ และควบคุมโครงการก่อสร้าง",
        requirements: "ปริญญาสถาปัตยกรรม ใบประกาศนียบัตรสถาปนิก 2+ ปีประสบการณ์ออกแบบ"
    },
    {
        id: 14,
        title: "Engineer",
        category: "engineering",
        company: "บริษัทวิศวกรรมโซลูชัน",
        location: "กรุงเทพ ประเทศไทย",
        salary: "฿50,000 - ฿95,000",
        description: "ออกแบบและพัฒนาวิธีแก้ปัญหาวิศวกรรมสำหรับโครงการวิศวกรรมโยธา เครื่องกล หรือไฟฟ้า",
        requirements: "ปริญญาวิศวกรรม ใบประกาศนียบัตรวิศวกรผู้เชี่ยวชาญ ความเชี่ยวชาญด้านเทคนิค"
    },
    {
        id: 15,
        title: "Professor",
        category: "education",
        company: "มหาวิทยาลัยกรุงเทพ",
        location: "กรุงเทพ ประเทศไทย",
        salary: "฿60,000 - ฿110,000",
        description: "สอนนักเรียน ทำการวิจัย และมีส่วนร่วมในการพัฒนาวิชาการ",
        requirements: "ปริญญาโท หรือ ดุษฎีบัณฑิต (ปริญญาเอก) ประสบการณ์การสอน ตีพิมพ์การวิจัย"
    },
    {
        id: 16,
        title: "Psychologist",
        category: "healthcare",
        company: "ศูนย์สุขภาพจิต",
        location: "กรุงเทพ ประเทศไทย",
        salary: "฿45,000 - ฿85,000",
        description: "ทำการประเมินจิตวิทยา ให้คำปรึกษา และสนับสนุนการรักษาสุขภาพจิต",
        requirements: "ปริญญาจิตวิทยา การฝึกอบรมทางคลินิก ใบประกาศนียบัตรจิตวิทยาที่ถูกต้อง"
    },
    {
        id: 17,
        title: "Psychiatrist",
        category: "healthcare",
        company: "โรงพยาบาลจิตเวช",
        location: "กรุงเทพ ประเทศไทย",
        salary: "฿85,000 - ฿160,000",
        description: "วินิจฉัยและรักษาความผิดปกติด้านจิตใจด้วยการแทรกแซงทางการแพทย์",
        requirements: "ปริญญาแพทย์ วิชาเอก จิตแพทย์ ใบประกาศนียบัตรแพทย์"
    },
    {
        id: 18,
        title: "Pharmacist",
        category: "healthcare",
        company: "บริษัทบริการเภสัชศาสตร์",
        location: "กรุงเทพ ประเทศไทย",
        salary: "฿40,000 - ฿75,000",
        description: "เตรียมและจ่ายยา ให้คำแนะนำผู้ป่วยเกี่ยวกับการใช้ยา",
        requirements: "ปริญญาเภสัชศาสตร์ ใบประกาศนียบัตรเภสัชกร ความรู้เกี่ยวกับยา"
    },
    {
        id: 19,
        title: "Veterinarian",
        category: "healthcare",
        company: "คลินิกดูแลสัตว์",
        location: "กรุงเทพ ประเทศไทย",
        salary: "฿45,000 - ฿85,000",
        description: "วินิจฉัยและรักษาโรคสัตว์และการบาดเจ็บ ทำการผ่าตัด",
        requirements: "ปริญญาสัตวแพทยศาสตร์ ใบประกาศนียบัตรสัตวแพทย์ ประสบการณ์การดูแลสัตว์"
    }
];
