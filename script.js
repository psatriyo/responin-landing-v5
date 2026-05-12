(function () {
  var defaultLanguage = 'id';
  var storageKey = 'responin-language';

  var translations = {
    id: {
      title: 'Responin | Partner Operasional AI',
      meta: {
        description:
          'Responin adalah agen operasional AI terkelola yang memeriksa, menyusun draf, mengarahkan, menindaklanjuti, dan mengeskalasi alur kerja bisnis berulang dengan persetujuan manusia.',
      },
      attr: {
        'brand.home': 'Beranda Responin',
        'nav.primary': 'Navigasi utama',
        'language.label': 'Pilih bahasa',
        'hero.actionsLabel': 'Ajakan bertindak halaman landing',
        'hero.proofLabel': 'Bukti keunggulan Responin',
        'hero.panelLabel': 'Pratinjau alur kerja Responin',
        'metrics.label': 'Metrik aman halaman landing',
      },
      text: {
        'nav.workflows': 'Alur kerja',
        'nav.process': 'Cara kerja',
        'nav.trust': 'Kepercayaan',
        'nav.pilot': 'Pilot',
        'cta.startOne': 'Mulai dari satu alur kerja',
        'cta.seeHow': 'Lihat cara kerjanya',
        'hero.eyebrow': 'Operasional AI terkelola untuk tim UKM',
        'hero.title': 'Berhenti menjadi sistem operasi untuk bisnismu.',
        'hero.description':
          'Responin memeriksa, menyusun draf, mengarahkan, menindaklanjuti, dan mengeskalasi pekerjaan operasional berulang sambil memastikan keputusan sensitif tetap disetujui manusia.',
        'hero.proof.memory': 'Memori dan konteks alur kerja',
        'hero.proof.approval': 'Eksekusi berbasis persetujuan',
        'hero.proof.audit': 'Log audit dan kontrol penggunaan',
        'queue.label': 'Antrean operasional hari ini',
        'queue.invoice': 'Draf tindak lanjut invoice',
        'queue.needsApproval': 'Perlu persetujuan',
        'queue.escalation': 'Triase eskalasi pelanggan',
        'queue.routed': 'Diarahkan ke pemilik tugas',
        'queue.summary': 'Ringkasan bisnis harian',
        'queue.ready': 'Siap',
        'metrics.oneTitle': 'alur kerja berantakan untuk memulai',
        'metrics.oneBody': 'Uji satu proses berulang, ukur nilainya, lalu perluas.',
        'metrics.monitoringTitle': 'pemantauan terjadwal',
        'metrics.monitoringBody': 'Pemeriksaan berbasis peristiwa bisa berjalan di luar jam kerja.',
        'metrics.human': 'Manusia',
        'metrics.approvalTitle': 'menyetujui tindakan sensitif',
        'metrics.approvalBody': 'Tindakan yang terlihat pelanggan dan berisiko tinggi tetap terkendali.',
        'problems.eyebrow': 'Beban operasional',
        'problems.title': 'Orang terbaikmu justru mengerjakan hal yang paling tidak penting.',
        'problems.description':
          'Responin dibuat untuk tim yang konteks bisnisnya tersebar di chat, spreadsheet, dashboard, dan ingatan manusia.',
        'problems.one': 'Pemilik bisnis mengecek chat, spreadsheet, dashboard, dan laporan secara manual.',
        'problems.two': 'Tindak lanjut tertunda karena pengetahuan proses tersebar di banyak tempat.',
        'problems.three': 'Administrasi rutin menyita perhatian orang-orang terbaik di timmu.',
        'problems.four':
          'Menaikkan skala operasional sering berarti menambah koordinator, bukan meningkatkan leverage.',
        'principles.eyebrow': 'Prinsip produk',
        'principles.title': 'Pekerja operasional yang andal, bukan chatbot baru.',
        'principles.description': 'Dokumen desain sistem mengarah ke tiga pilar: memori, aksi, dan kontrol.',
        'principles.learnTitle': 'Belajar, bukan sekadar mengeksekusi',
        'principles.learnBody':
          'Membangun memori bisnis yang berguna: orang, proses, preferensi, pengecualian berulang, dan konteks spesifik tiap alur kerja.',
        'principles.actTitle': 'Bertindak, bukan sekadar memberi saran',
        'principles.actBody':
          'Mendorong pekerjaan berulang maju dengan memeriksa sistem, menyusun respons, menyiapkan update, mengarahkan pengecualian, dan melaporkan hasil.',
        'principles.safeTitle': 'Aman, bukan gegabah',
        'principles.safeBody':
          'Menggunakan aturan persetujuan, memori terbatas ruang lingkup, log audit, dan kontrol kuota agar automasi memperbaiki operasional tanpa menghilangkan penilaian manusia.',
        'process.eyebrow': 'Cara kerja',
        'process.title': 'Dari pemicu hingga aksi yang disetujui.',
        'process.description':
          'Responin memisahkan penalaran dari kontrol sistem: AI menyusun draf dan rekomendasi; platform mengotorisasi, membatasi, mengeksekusi, dan mencatat.',
        'process.one': 'Channel pelanggan atau pemicu terjadwal',
        'process.two': 'Klasifikasi alur kerja dan pengambilan konteks',
        'process.three': 'Pemeriksaan kebijakan, kuota, dan pengarahan model',
        'process.four': 'Penalaran AI, penyusunan draf, ringkasan, atau rekomendasi',
        'process.five': 'Persetujuan manusia saat diperlukan',
        'process.six': 'Eksekusi alat, log audit, dan laporan ke pelanggan',
        'useCases.eyebrow': 'Alur kerja pertama',
        'useCases.title': 'Mulai sempit, buktikan nilainya, lalu perluas.',
        'useCases.description': 'Mulai dari satu alur kerja berulang yang bisa diukur dan dikendalikan.',
        'useCases.summaryTitle': 'Ringkasan bisnis harian',
        'useCases.summaryBody':
          'Mengumpulkan perubahan operasional, menandai pengecualian, dan memberi manajer aksi berikutnya yang paling penting.',
        'useCases.escalationTitle': 'Triase eskalasi pelanggan',
        'useCases.escalationBody':
          'Mengklasifikasikan urgensi, mengambil konteks, menyusun respons, dan mengarahkan kasus berisiko untuk ditinjau.',
        'useCases.invoiceTitle': 'Tindak lanjut invoice dan pembayaran',
        'useCases.invoiceBody':
          'Menyiapkan pengingat dan update status sambil menjaga gerbang persetujuan untuk komunikasi finansial.',
        'useCases.crmTitle': 'Bantuan CRM atau spreadsheet',
        'useCases.crmBody': 'Mengubah update rutin menjadi aksi yang bisa direview agar catatan internal tetap mutakhir.',
        'trust.eyebrow': 'Model kepercayaan',
        'trust.title': 'Tindakan sensitif tetap disetujui manusia, tercatat, dan dibatasi ruang lingkupnya.',
        'trust.description':
          'Responin menghindari otonomi berlebihan dengan menjadikan persetujuan, batas memori, auditabilitas, dan kontrol penggunaan sebagai bagian dari cerita produk.',
        'trust.one': 'Persetujuan manusia sebelum tindakan yang terlihat pelanggan atau berisiko tinggi',
        'trust.two': 'Memori dibatasi berdasarkan pelanggan, workspace, agen, dan alur kerja',
        'trust.three': 'Log audit untuk proses alur kerja, persetujuan, dan pemanggilan alat',
        'trust.four': 'Pemeriksaan kuota dan penggunaan sebelum pemanggilan model',
        'trust.five': 'Referensi kredensial, bukan konfigurasi teks polos',
        'faq.eyebrow': 'Pertanyaan pembeli',
        'faq.title': 'Jawaban jelas sebelum pilot dimulai.',
        'faq.description': 'Jawaban konservatif yang selaras dengan batasan pengaman desain sistem.',
        'faq.chatgptQuestion': 'Apakah Responin hanya ChatGPT?',
        'faq.chatgptAnswer':
          'Tidak. Responin diposisikan sebagai lapisan operasional terkelola dengan konteks alur kerja, memori, integrasi, aturan persetujuan, pengukuran penggunaan, dan auditabilitas.',
        'faq.approvalQuestion': 'Apakah Responin akan mengirim pesan ke pelanggan tanpa persetujuan?',
        'faq.approvalAnswer':
          'Tindakan sensitif atau yang terlihat pelanggan sebaiknya membutuhkan persetujuan di MVP. Responin bisa menyusun draf dan memberi rekomendasi, sementara manusia menyetujui keputusan penting.',
        'faq.firstQuestion': 'Apa yang sebaiknya diautomasi dulu oleh bisnis?',
        'faq.firstAnswer':
          'Mulai dari satu alur kerja yang berulang dan terukur, seperti ringkasan harian, triase eskalasi, tindak lanjut pembayaran, atau pemantauan order/status.',
        'pilot.eyebrow': 'Gerak pilot 30 hari',
        'pilot.title': 'Pilih satu alur kerja yang berantakan. Jadikan terukur.',
        'pilot.description':
          'Responin dirancang untuk memulai dari satu alur kerja operasional yang fokus, melaporkan perubahan yang terjadi, lalu memperluas hanya setelah alasan bisnisnya jelas.',
        'pilot.start': 'Mulai pilot alur kerja',
        'pilot.review': 'Tinjau desain sistem',
      },
    },
    en: {
      title: 'Responin | AI Operations Partner',
      meta: {
        description:
          'Responin is a managed AI operations agent that checks, drafts, routes, follows up, and escalates repetitive business workflows with human approval.',
      },
      attr: {
        'brand.home': 'Responin home',
        'nav.primary': 'Primary navigation',
        'language.label': 'Choose language',
        'hero.actionsLabel': 'Landing page calls to action',
        'hero.proofLabel': 'Responin proof points',
        'hero.panelLabel': 'Responin workflow preview',
        'metrics.label': 'Safe landing page metrics',
      },
      text: {
        'nav.workflows': 'Workflows',
        'nav.process': 'How it works',
        'nav.trust': 'Trust',
        'nav.pilot': 'Pilot',
        'cta.startOne': 'Start with one workflow',
        'cta.seeHow': 'See how it works',
        'hero.eyebrow': 'Managed AI operations for SMB teams',
        'hero.title': 'Stop being the operating system for your business.',
        'hero.description':
          'Responin checks, drafts, routes, follows up, and escalates repeatable operational work while keeping sensitive decisions human-approved.',
        'hero.proof.memory': 'Workflow memory and context',
        'hero.proof.approval': 'Approval-first execution',
        'hero.proof.audit': 'Audit logs and usage controls',
        'queue.label': 'Today’s operations queue',
        'queue.invoice': 'Invoice follow-up draft',
        'queue.needsApproval': 'Needs approval',
        'queue.escalation': 'Customer escalation triage',
        'queue.routed': 'Routed to owner',
        'queue.summary': 'Daily business summary',
        'queue.ready': 'Ready',
        'metrics.oneTitle': 'messy workflow to start',
        'metrics.oneBody': 'Pilot one repeatable process, measure value, then expand.',
        'metrics.monitoringTitle': 'scheduled monitoring',
        'metrics.monitoringBody': 'Event-triggered checks can run outside business hours.',
        'metrics.human': 'Human',
        'metrics.approvalTitle': 'approval for sensitive actions',
        'metrics.approvalBody': 'Customer-visible and high-risk actions stay controlled.',
        'problems.eyebrow': 'The operating drag',
        'problems.title': 'Your best people are doing your least important work.',
        'problems.description':
          'Responin is built for teams where business context is scattered across chats, spreadsheets, dashboards, and human memory.',
        'problems.one': 'Owners manually check chats, spreadsheets, dashboards, and reports.',
        'problems.two': 'Follow-ups get delayed because process knowledge is scattered.',
        'problems.three': 'Routine admin work consumes the attention of your best people.',
        'problems.four':
          'Scaling operations often means hiring coordinators instead of improving leverage.',
        'principles.eyebrow': 'Product principles',
        'principles.title': 'A reliable operations worker, not another chatbot.',
        'principles.description': 'The system design docs point to three pillars: memory, action, and control.',
        'principles.learnTitle': "Learns, doesn't just execute",
        'principles.learnBody':
          'Builds useful business memory: people, processes, preferences, recurring exceptions, and workflow-specific context.',
        'principles.actTitle': "Acts, doesn't just advise",
        'principles.actBody':
          'Moves repeatable work forward by checking systems, drafting responses, preparing updates, routing exceptions, and reporting outcomes.',
        'principles.safeTitle': 'Safe, not reckless',
        'principles.safeBody':
          'Uses approval rules, scoped memory, audit logs, and quota controls so automation improves operations without losing human judgment.',
        'process.eyebrow': 'How it works',
        'process.title': 'From trigger to approved action.',
        'process.description':
          'Responin separates reasoning from system control: AI drafts and recommends; the platform authorizes, meters, executes, and logs.',
        'process.one': 'Customer channel or scheduled trigger',
        'process.two': 'Workflow classification and context retrieval',
        'process.three': 'Policy, quota, and model routing checks',
        'process.four': 'AI reasoning, drafting, summarization, or recommendation',
        'process.five': 'Human approval where required',
        'process.six': 'Tool execution, audit log, and customer reporting',
        'useCases.eyebrow': 'First workflows',
        'useCases.title': 'Start narrow, prove value, then expand.',
        'useCases.description': 'Start with one repeatable workflow that can be measured and governed.',
        'useCases.summaryTitle': 'Daily business summary',
        'useCases.summaryBody':
          'Collects operational changes, flags exceptions, and gives managers the next actions that matter.',
        'useCases.escalationTitle': 'Customer escalation triage',
        'useCases.escalationBody':
          'Classifies urgency, retrieves context, drafts a response, and routes risky cases for review.',
        'useCases.invoiceTitle': 'Invoice and payment follow-up',
        'useCases.invoiceBody':
          'Prepares reminders and status updates while preserving approval gates for financial communication.',
        'useCases.crmTitle': 'CRM or spreadsheet assistance',
        'useCases.crmBody': 'Turns routine updates into reviewable actions so internal records stay current.',
        'trust.eyebrow': 'Trust model',
        'trust.title': 'Sensitive actions stay human-approved, logged, and scoped.',
        'trust.description':
          'Responin avoids over-autonomy by making approval, memory boundaries, auditability, and usage controls part of the product story.',
        'trust.one': 'Human approval before customer-visible or high-risk actions',
        'trust.two': 'Scoped memory by customer, workspace, agent, and workflow',
        'trust.three': 'Audit logs for workflow runs, approvals, and tool calls',
        'trust.four': 'Quota and usage checks before model calls',
        'trust.five': 'Credential references instead of plaintext configuration',
        'faq.eyebrow': 'Buyer questions',
        'faq.title': 'Clear answers before the pilot starts.',
        'faq.description': 'Conservative answers aligned with the system design guardrails.',
        'faq.chatgptQuestion': 'Is Responin just ChatGPT?',
        'faq.chatgptAnswer':
          'No. Responin is positioned as a managed operations layer with workflow context, memory, integrations, approval rules, metering, and auditability.',
        'faq.approvalQuestion': 'Will it message customers without approval?',
        'faq.approvalAnswer':
          'Sensitive or customer-visible actions should require approval in the MVP. Responin can draft and recommend, while humans approve important decisions.',
        'faq.firstQuestion': 'What should a business automate first?',
        'faq.firstAnswer':
          'Start with one repeatable, measurable workflow such as daily summaries, escalation triage, payment follow-up, or order/status monitoring.',
        'pilot.eyebrow': '30-day pilot motion',
        'pilot.title': 'Pick one messy workflow. Make it measurable.',
        'pilot.description':
          'Responin is designed to start with a focused operational workflow, report what changed, and expand only after the business case is clear.',
        'pilot.start': 'Start a workflow pilot',
        'pilot.review': 'Review system design',
      },
    },
  };

  function getStoredLanguage() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function storeLanguage(language) {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch (error) {
      // Ignore storage failures; the switcher should still work for this page view.
    }
  }

  function setLanguage(language) {
    var activeLanguage = translations[language] ? language : defaultLanguage;
    var dictionary = translations[activeLanguage];

    document.documentElement.lang = activeLanguage;
    document.title = dictionary.title;

    var metaDescription = document.querySelector('[data-i18n-meta="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', dictionary.meta.description);
    }

    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      var key = element.getAttribute('data-i18n');
      if (dictionary.text[key]) {
        element.textContent = dictionary.text[key];
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (element) {
      var mappings = element.getAttribute('data-i18n-attr').split(',');
      mappings.forEach(function (mapping) {
        var parts = mapping.split(':');
        var attr = parts[0] && parts[0].trim();
        var key = parts[1] && parts[1].trim();
        if (attr && key && dictionary.attr[key]) {
          element.setAttribute(attr, dictionary.attr[key]);
        }
      });
    });

    document.querySelectorAll('[data-lang]').forEach(function (button) {
      var isActive = button.getAttribute('data-lang') === activeLanguage;
      button.classList.toggle('language-switcher__button--active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    storeLanguage(activeLanguage);
  }

  document.querySelectorAll('[data-lang]').forEach(function (button) {
    button.addEventListener('click', function () {
      setLanguage(button.getAttribute('data-lang'));
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      var targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', targetId);
    });
  });

  setLanguage(getStoredLanguage() || defaultLanguage);
})();
